import {Component, OnInit} from '@angular/core';
import {ProducerFormDialogComponent} from '../../Components/producer-form-dialog/producer-form-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ProducerService} from '../../Services/producer.service';
import {Producer} from '../../Models/producer';
import {Consumer} from '../../Models/consumer';

@Component({
    selector: 'app-producer',
    templateUrl: './producer.component.html',
    styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

    public producers: Producer[];
    public today: Date = new Date();

    constructor(public dialog: MatDialog,
                private producerService: ProducerService) {
    }

    ngOnInit(): void {
        this.fetchProducer();
    }

    openDialog(): void {
        const producer = new Producer();
        const dialogRef = this.dialog.open(ProducerFormDialogComponent, {
            width: '300px',
            data: producer
        });

        dialogRef.afterClosed().subscribe(result => {
            this.createProducer(result);
        });
    }

    updateDialog(producer: Producer): void {
        const dialogRef = this.dialog.open(ProducerFormDialogComponent, {
            width: '300px',
            data: producer
        });

        dialogRef.afterClosed().subscribe(result => {
            if (typeof result === 'object') {
                this.updateProducer(result);
            } else if (typeof result === 'number') {
                this.deleteProducer(result);
            }
        });
    }

    private fetchProducer(): void {
        this.producerService.fetch().subscribe(res => {
            this.producerService.setProducers(res);
            this.producers = this.producerService.getProducerByDate();
        });
    }

    private createProducer(data): void {
        this.producerService.create(data).subscribe(newProducer => {
            this.producerService.addProducer(newProducer);
            this.producers = this.producerService.getProducerByDate();
        });
    }

    private updateProducer(data): void {
        this.producerService.update(data).subscribe(updatedProducer => {
            this.producerService.updateProducer(updatedProducer);
            this.producers = this.producerService.getProducerByDate();
        });
    }

    private deleteProducer(selectedId: number): void {
        this.producerService.delete(selectedId).subscribe(res => {
            this.producerService.deleteProducer(selectedId);
            this.producers = this.producerService.getProducerByDate();
        });
    }

}
