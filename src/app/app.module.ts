import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import {HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import {InfoTodayComponent} from "./Screens/info-today/info-today.component";
import {ProducerComponent} from "./Screens/producer/producer.component";
import {
    ProducerFormDialogComponent
} from "./Components/producer-form-dialog/producer-form-dialog.component";
import {ConsumerComponent} from "./Screens/consumer/consumer.component";
import {ConsumerFormDialogComponent} from "./Components/consumer-form-dialog/consumer-form-dialog.component";

import {ChartsModule} from 'ng2-charts';
import {HeightBarChartDialogComponent} from "./Components/height-bar-chart-dialog/height-bar-chart-dialog.component";
import {GeneralComponent} from "./Screens/general/general.component";
import {WeightBarChartDialogComponent} from "./Components/weight-bar-chart-dialog/weight-bar-chart-dialog.component";
import {AvatarUploadDialogComponent} from "./Components/avatar-upload-dialog/avatar-upload-dialog.component";

@NgModule({
    declarations: [
        AppComponent,

        //Components
        ProducerFormDialogComponent,
        ConsumerFormDialogComponent,
        HeightBarChartDialogComponent,
        WeightBarChartDialogComponent,
        AvatarUploadDialogComponent,

        //Screens
        InfoTodayComponent,
        ProducerComponent,
        ConsumerComponent,
        GeneralComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        ChartsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
