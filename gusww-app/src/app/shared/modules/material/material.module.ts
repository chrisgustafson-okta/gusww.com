import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,


  ],
  exports: [
MatIconModule,
MatMenuModule,
MatToolbarModule,
MatTabsModule,
MatTableModule,
MatCardModule,
MatButtonModule
  ]
})
export class MaterialModule { }