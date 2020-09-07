import {Component, OnInit} from '@angular/core';
import {ConsumerFormDialogComponent} from '../../Components/consumer-form-dialog/consumer-form-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ConsumerService} from '../../Services/consumer.service';
import {Consumer} from '../../Models/consumer';

@Component({
    selector: 'app-consumer',
    templateUrl: './consumer.component.html',
    styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

    public consumers: Consumer[];
    public today: Date = new Date();

    constructor(public dialog: MatDialog,
                private consumerService: ConsumerService) {
    }

    ngOnInit(): void {
        this.fetchConsumer();
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
        this.consumerService.fetch().subscribe(res => {
            this.consumerService.setConsumers(res);
            this.consumers = this.consumerService.getConsumerByDate();
        });
    }

    private createConsumer(data): void {
        this.consumerService.create(data).subscribe(newConsumer => {
            this.consumerService.addConsumer(newConsumer);
            this.consumers = this.consumerService.getConsumerByDate();
        });
    }

    private updateConsumer(data): void {
        this.consumerService.update(data).subscribe(updatedConsumer => {
            this.consumerService.updateConsumer(updatedConsumer);
            this.consumers = this.consumerService.getConsumerByDate();
        });
    }

    private deleteConsumer(selectedId: number): void {
        this.consumerService.delete(selectedId).subscribe(res => {
            this.consumerService.deleteConsumer(selectedId);
            this.consumers = this.consumerService.getConsumerByDate();
        });
    }
}
