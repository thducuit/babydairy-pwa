import {Component, OnInit} from '@angular/core';
import {ConsumerFormDialogComponent} from '../../Components/consumer-form-dialog/consumer-form-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ConsumerService} from '../../Services/consumer.service';
import {Consumer, ConsumerConstant} from '../../Models/consumer';
import {OnlineOfflineService} from '../../Services/online-offline.service';

@Component({
    selector: 'app-consumer',
    templateUrl: './consumer.component.html',
    styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

    public consumers: Consumer[] = [];
    public today: Date = new Date();

    constructor(private dialog: MatDialog,
                private snackBar: MatSnackBar,
                private consumerService: ConsumerService,
                private onlineOfflineService: OnlineOfflineService) {
        this.registerOnlineOfflineEvents(onlineOfflineService);
    }

    ngOnInit(): void {
        this.fetchConsumer();
    }

    openSnackBar(message: string, action: string = ''): void {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    openDialog(): void {
        const consumer = new Consumer();
        consumer.no = this.consumers.length + 1;
        const dialogRef = this.dialog.open(ConsumerFormDialogComponent, {
            width: '300px',
            data: consumer
        });

        dialogRef.afterClosed().subscribe(result => {
            this.createConsumer(result);
        });
    }


    updateDialog(consumer: Consumer): void {
        const dialogRef = this.dialog.open(ConsumerFormDialogComponent, {
            width: '300px',
            data: consumer
        });

        dialogRef.afterClosed().subscribe(result => {
            if (typeof result === 'object') {
                this.updateConsumer(result);
            } else if (typeof result === 'number') {
                this.deleteConsumer(result);
            }
        });
    }

    private fetchConsumer(): void {
        if (this.onlineOfflineService.isOnline) {
            this.consumerService.fetch().subscribe(res => {
                this.consumers = this.consumerService.setConsumers(res).getConsumerByDate();
                this.consumerService.updateToLocalDb();
            });
        } else {
            this.consumerService.fetchFromIndexedDb().subscribe(res => {
                this.consumers = this.consumerService.setConsumers(res).getConsumerByDate();
            });
        }
    }

    private createConsumer(data): void {
        if (this.onlineOfflineService.isOnline) {
            this.consumerService.create(data).subscribe(newConsumer => {
                this.consumers = this.consumerService.addConsumer(newConsumer).getConsumerByDate();
                this.consumerService.updateToLocalDb('add', newConsumer);
                this.openSnackBar('Đã lưu thành công lên server');
            });
        } else {
            this.consumerService.createToIndexedDb(data).subscribe(newConsumer => {
                this.consumers = this.consumerService.addConsumer(newConsumer).getConsumerByDate();
                this.openSnackBar('Đã lưu thành công vào local');
            });
        }
    }

    private updateConsumer(data): void {
        if (this.onlineOfflineService.isOnline) {
            this.consumerService.update(data).subscribe(updatedConsumer => {
                this.consumers = this.consumerService.updateConsumer(updatedConsumer).getConsumerByDate();
                this.consumerService.updateToLocalDb('edit', updatedConsumer);
                this.openSnackBar('Đã cập nhật thành công lên server');
            });
        } else {
            data.version = this.consumerService.isCreatedByLocal(data) ? ConsumerConstant.NEW_FROM_LOCAL : ConsumerConstant.UPDATE;
            this.consumerService.updateToIndexedDb(data).subscribe(updatedConsumer => {
                this.consumers = this.consumerService.updateConsumer(updatedConsumer).getConsumerByDate();
                this.openSnackBar('Đã cập nhật thành công vào local');
            });
        }
    }

    private deleteConsumer(selectedId: number): void {
        if (this.onlineOfflineService.isOnline) {
            this.consumerService.delete(selectedId).subscribe(res => {
                this.consumers = this.consumerService.deleteConsumer(selectedId).getConsumerByDate();
                this.consumerService.updateToLocalDb('delete', selectedId);
                this.openSnackBar('Đã xóa thành công lên server');
            });
        } else {
            const consumer = this.consumerService.getById(selectedId);
            if (consumer.version === ConsumerConstant.NEW_FROM_LOCAL) {
                this.consumerService.deleteFromIndexedDb(selectedId).subscribe(() => {
                    this.consumers = this.consumerService.deleteConsumer(selectedId).getConsumerByDate();
                    this.openSnackBar('Đã xóa thành công vào local');
                });
            } else {
                consumer.version = ConsumerConstant.DELETE;
                this.consumerService.updateToIndexedDb(consumer).subscribe(updatedConsumer => {
                    this.consumers = this.consumerService.updateConsumer(consumer).getConsumerByDate();
                    this.openSnackBar('Đã xóa thành công vào local');
                });
            }
        }
    }

    private registerOnlineOfflineEvents(onlineOfflineService: OnlineOfflineService): void {
        onlineOfflineService.connectionChanged.subscribe(online => {
            if (online) {
                this.consumerService.syncToOnline().subscribe(res => {
                    this.openSnackBar('Đồng bộ dữ liệu thành công');
                });
            } else {
                this.openSnackBar('Mất kết nối, chuyển sang offline!!!');
            }
        });
    }
}
