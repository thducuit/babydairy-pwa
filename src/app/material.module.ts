import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatListModule,
        MatDividerModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatDatepickerModule,
        MatIconModule,
        MatSnackBarModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatListModule,
        MatDividerModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatDatepickerModule,
        MatIconModule,
        MatSnackBarModule
    ]
})

export class MaterialModule { }