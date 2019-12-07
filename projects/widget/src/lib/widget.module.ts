import { NgModule } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [WidgetComponent],
  imports: [
    HttpClientModule
  ],
  exports: [WidgetComponent]
})
export class WidgetModule { }
