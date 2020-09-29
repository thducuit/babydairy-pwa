import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Info, InfoConstant} from '../../Models/info';
import {InfoFormDialogComponent} from '../../Components/info-form-dialog/info-form-dialog.component';
import {OnlineOfflineService} from '../../Services/online-offline.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BabyinfoService} from '../../Services/babyinfo.service';
import {BabyInfosStore} from '../../Stores/baby-infos.store';

@Component({
    selector: 'app-tracking',
    templateUrl: './tracking.component.html',
    styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

    public infos: Info[] = [];

    constructor(
        private dialog: MatDialog,
        private onlineOfflineService: OnlineOfflineService,
        private snackBar: MatSnackBar,
        private babyinfoService: BabyinfoService,
        private babyinfoStore: BabyInfosStore
    ) {
        this.registerOnlineOfflineEvents(onlineOfflineService);
    }

    ngOnInit(): void {
        this.fetchTracking();
    }

    openSnackBar(message: string, action: string = ''): void {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    openDialog(): void {
        const info = new Info();
        const dialogRef = this.dialog.open(InfoFormDialogComponent, {
            width: '300px',
            data: info
        });

        dialogRef.afterClosed().subscribe(result => {
            this.createTracking(result);
        });
    }

    updateDialog(info: Info): void {
        const dialogRef = this.dialog.open(InfoFormDialogComponent, {
            width: '300px',
            data: info
        });

        dialogRef.afterClosed().subscribe(result => {
            if (typeof result === 'object') {
                this.updateTracking(result);
            } else if (typeof result === 'number') {
                this.deleteTracking(result);
            }
        });
    }

    private fetchTracking(): void {
        if (this.onlineOfflineService.isOnline) {
            this.babyinfoService.fetch().subscribe(res => {
                this.infos = this.babyinfoService.setInfos(res).getInfos();
                this.babyinfoStore.updateBabyInfosToStore(this.infos);
                this.babyinfoService.updateToLocalDb();
            });
        } else {
            this.babyinfoService.fetchFromIndexedDb().subscribe(res => {
                this.infos = this.babyinfoService.setInfos(res).getInfos();
                this.babyinfoStore.updateBabyInfosToStore(this.infos);
            });
        }
    }

    private createTracking(data): void {
        if (this.onlineOfflineService.isOnline) {
            this.babyinfoService.create(data).subscribe(newInfo => {
                this.infos = this.babyinfoService.addInfo(newInfo).getInfos();
                this.babyinfoStore.updateBabyInfosToStore(this.infos);
                this.babyinfoService.updateToLocalDb('add', newInfo);
                this.openSnackBar('Đã lưu thành công lên server');
            });
        } else {
            this.babyinfoService.createToIndexedDb(data).subscribe(newInfo => {
                this.infos = this.babyinfoService.addInfo(newInfo).getInfos();
                this.babyinfoStore.updateBabyInfosToStore(this.infos);
                this.openSnackBar('Đã lưu thành công vào local');
            });
        }
    }

    private updateTracking(data): void {
        if (this.onlineOfflineService.isOnline) {
            this.babyinfoService.update(data).subscribe(updatedInfo => {
                this.infos = this.babyinfoService.updateInfo(updatedInfo).getInfos();
                this.babyinfoStore.updateBabyInfosToStore(this.infos);
                this.babyinfoService.updateToLocalDb('edit', updatedInfo);
                this.openSnackBar('Đã cập nhật thành công lên server');
            });
        } else {
            data.version = this.babyinfoService.isCreatedByLocal(data) ? InfoConstant.NEW_FROM_LOCAL : InfoConstant.UPDATE;
            this.babyinfoService.updateToIndexedDb(data).subscribe(updatedInfo => {
                this.infos = this.babyinfoService.updateInfo(updatedInfo).getInfos();
                this.babyinfoStore.updateBabyInfosToStore(this.infos);
                this.openSnackBar('Đã cập nhật thành công vào local');
            });
        }
    }

    private deleteTracking(selectedId: number): void {
        if (this.onlineOfflineService.isOnline) {
            this.babyinfoService.delete(selectedId).subscribe(res => {
                this.infos = this.babyinfoService.deleteInfo(selectedId).getInfos();
                this.babyinfoStore.updateBabyInfosToStore(this.infos);
                this.babyinfoService.updateToLocalDb('delete', selectedId);
                this.openSnackBar('Đã xóa thành công lên server');
            });
        } else {
            const info = this.babyinfoService.getById(selectedId);
            if (info.version === InfoConstant.NEW_FROM_LOCAL) {
                this.babyinfoService.deleteFromIndexedDb(selectedId).subscribe(() => {
                    this.infos = this.babyinfoService.deleteInfo(selectedId).getInfos();
                    this.babyinfoStore.updateBabyInfosToStore(this.infos);
                    this.openSnackBar('Đã xóa thành công vào local');
                });
            } else {
                info.version = InfoConstant.DELETE;
                this.babyinfoService.updateToIndexedDb(info).subscribe(updatedInfo => {
                    this.infos = this.babyinfoService.updateInfo(info).getInfos();
                    this.babyinfoStore.updateBabyInfosToStore(this.infos);
                    this.openSnackBar('Đã xóa thành công vào local');
                });
            }
        }
    }

    private registerOnlineOfflineEvents(onlineOfflineService: OnlineOfflineService): void {
        onlineOfflineService.connectionChanged.subscribe(online => {
            if (online) {
                this.babyinfoService.syncToOnline().subscribe(res => {
                    this.openSnackBar('Đồng bộ dữ liệu thành công');
                });
            } else {
                this.openSnackBar('Mất kết nối, chuyển sang offline!!!');
            }
        });
    }
}
