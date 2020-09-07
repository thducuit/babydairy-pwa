import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface ConsumerFormDialogComponentData {
    id: number;
    capacity: string;
    no: number;
    isEmpty?: number;
}

@Component({
    selector: 'app-consumer-form-dialog',
    templateUrl: './consumer-form-dialog.component.html',
    styleUrls: ['./consumer-form-dialog.component.css']
})
export class ConsumerFormDialogComponent implements OnInit {

    capacityOptions: number[] = [80, 90, 100, 110, 120, 130, 140, 150, 160];

    constructor(public dialogRef: MatDialogRef<ConsumerFormDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ConsumerFormDialogComponentData) {
    }

    ngOnInit(): void {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    update(): void {
        console.log('update click');
    }

}
