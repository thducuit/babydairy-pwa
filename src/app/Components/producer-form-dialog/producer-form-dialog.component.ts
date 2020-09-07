import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface ProducerFormDialogComponentData {
    id: number;
    capacity: string;
    no: number;
}

@Component({
    selector: 'app-producer-form-dialog',
    templateUrl: './producer-form-dialog.component.html',
    styleUrls: ['./producer-form-dialog.component.css']
})
export class ProducerFormDialogComponent implements OnInit {
    capacityOptions: number[] = [80, 90, 100, 110, 120, 130, 140, 150, 160];

    constructor(public dialogRef: MatDialogRef<ProducerFormDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ProducerFormDialogComponentData) {
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
