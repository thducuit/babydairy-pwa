import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface InfoFormDialogComponentData {
    id: number;
    month: number;
    week: number;
    height: number;
    weight?: number;
}

@Component({
    selector: 'app-info-form-dialog',
    templateUrl: './info-form-dialog.component.html',
    styleUrls: ['./info-form-dialog.component.css']
})
export class InfoFormDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<InfoFormDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: InfoFormDialogComponentData) {
    }

    ngOnInit(): void {
    }

    update(): void {
    }

}
