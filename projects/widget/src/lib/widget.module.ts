import { NgModule } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListItem, MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [WidgetComponent],
  imports: [
    FlexLayoutModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatListItem,
  ],
  exports: [WidgetComponent]
})
export class WidgetModule { }
