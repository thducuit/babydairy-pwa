import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AvatarUploadDialogComponent} from "../../Components/avatar-upload-dialog/avatar-upload-dialog.component";

@Component({
    selector: 'app-info-today',
    templateUrl: './info-today.component.html',
    styleUrls: ['./info-today.component.css']
})
export class InfoTodayComponent implements OnInit {

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(AvatarUploadDialogComponent, {
            width: '300px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }

}
