import {Component, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-avatar-upload-dialog',
    templateUrl: './avatar-upload-dialog.component.html',
    styleUrls: ['./avatar-upload-dialog.component.css']
})
export class AvatarUploadDialogComponent implements OnInit {

    selectedFile: File;

    constructor(public dialogRef: MatDialogRef<AvatarUploadDialogComponent>) {
    }

    ngOnInit(): void {
    }

    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
    }

    update() {
        console.log(this.selectedFile);
    }

}
