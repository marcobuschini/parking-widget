import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-widget',
  template: `
    <p>
      widget works!
    </p>
  `,
  styles: []
})
export class WidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
