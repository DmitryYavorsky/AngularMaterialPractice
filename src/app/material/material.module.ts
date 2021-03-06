import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports: [
  CommonModule,
  BrowserAnimationsModule,
  Material.MatToolbarModule,
  Material.MatGridListModule,
  Material.MatFormFieldModule,
  Material.MatInputModule,
  Material.MatRadioModule,
  Material.MatSelectModule,
  Material.MatDatepickerModule,
  Material.MatNativeDateModule,
  Material.MatCheckboxModule,
  Material.MatButtonModule,
  Material.MatSnackBarModule,
  Material.MatTableModule,
  Material.MatIconModule,
  Material.MatPaginatorModule,
  Material.MatSortModule,
  Material.MatDialogModule
],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatDatepickerModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatDialogModule
    ]
})
export class MaterialModule {}
