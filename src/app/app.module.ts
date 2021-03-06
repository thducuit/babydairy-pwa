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

import {InfoTodayComponent} from './Screens/info-today/info-today.component';
import {ProducerComponent} from './Screens/producer/producer.component';
import {
    ProducerFormDialogComponent
} from './Components/producer-form-dialog/producer-form-dialog.component';
import {ConsumerComponent} from './Screens/consumer/consumer.component';
import {ConsumerFormDialogComponent} from './Components/consumer-form-dialog/consumer-form-dialog.component';

import {ChartsModule} from 'ng2-charts';
import {HeightBarChartDialogComponent} from './Components/height-bar-chart-dialog/height-bar-chart-dialog.component';
import {GeneralComponent} from './Screens/general/general.component';
import {WeightBarChartDialogComponent} from './Components/weight-bar-chart-dialog/weight-bar-chart-dialog.component';
import {AvatarUploadDialogComponent} from './Components/avatar-upload-dialog/avatar-upload-dialog.component';
import {ConsumerService} from './Services/consumer.service';
import {ProducerService} from './Services/producer.service';
import {BabyinfoService} from './Services/babyinfo.service';
import {TrackingComponent} from './Screens/tracking/tracking.component';
import {InfoFormDialogComponent} from './Components/info-form-dialog/info-form-dialog.component';
import {BabyInfosStore} from './Stores/baby-infos.store';
import {GeneralService} from './Services/general.service';
import {AppRoutingModule} from './app-routing.module';
import {HomeContainerComponent} from './Containers/home-container/home-container.component';
import {LoginContainerComponent} from './Containers/login-container/login-container.component';
import {AuthService} from './Services/auth.service';
import {TokenInterceptor} from './token.interceptor';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {JwtInterceptor} from './jwt.interceptor';

@NgModule({
    declarations: [
        AppComponent,

        // Components
        ProducerFormDialogComponent,
        ConsumerFormDialogComponent,
        HeightBarChartDialogComponent,
        WeightBarChartDialogComponent,
        AvatarUploadDialogComponent,
        InfoFormDialogComponent,

        HomeContainerComponent,
        LoginContainerComponent,

        // Screens
        InfoTodayComponent,
        ProducerComponent,
        ConsumerComponent,
        GeneralComponent,
        TrackingComponent
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
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [
        // Services
        ConsumerService,
        ProducerService,
        BabyinfoService,
        GeneralService,
        AuthService,

        // Stores
        BabyInfosStore,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
