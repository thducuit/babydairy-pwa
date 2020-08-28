import {Component, OnInit} from '@angular/core';
import {ConsumerFormDialogComponent} from "../../Components/consumer-form-dialog/consumer-form-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-consumer',
    templateUrl: './consumer.component.html',
    styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ConsumerFormDialogComponent, {
            width: '300px',
            data: {id: 1, capacity: 110}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }

    updateDialog(id: number): void {
        const dialogRef = this.dialog.open(ConsumerFormDialogComponent, {
            width: '300px',
            data: {id: id, capacity: 120}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog update was closed', result);
        });
    }

}
