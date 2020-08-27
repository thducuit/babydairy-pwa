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
        MatRadioModule
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
        MatRadioModule
    ]
})

export class MaterialModule { }