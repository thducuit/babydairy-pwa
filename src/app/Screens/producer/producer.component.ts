import { Component, OnInit } from '@angular/core';
import { ProducerFormDialogComponent } from "../../Components/producer-form-dialog/producer-form-dialog.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
      const dialogRef = this.dialog.open(ProducerFormDialogComponent, {
          width: '250px',
          data: {id: 1, capacity: 110}
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
      });
  }

  updateDialog(id: number): void {
      const dialogRef = this.dialog.open(ProducerFormDialogComponent, {
          width: '250px',
          data: {id: id, capacity: 120}
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog update was closed', result);
      });
  }

  ngOnInit(): void {
  }

}
