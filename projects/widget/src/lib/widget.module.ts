import { NgModule } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WidgetComponent],
  exports: [WidgetComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
  ]
})
export class WidgetModule { }
