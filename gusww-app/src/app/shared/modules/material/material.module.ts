import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
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
MatButtonModule,
MatGridListModule,
MatSliderModule,
MatToolbarModule,
MatButtonModule,
MatSidenavModule,
MatIconModule,
MatListModule
  ]
})
export class MaterialModule { }