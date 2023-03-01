import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.html',
})
export class TableExpandComponent implements OnInit {
  constructor() {}
  @Input() product: any;

  ngOnInit() {}
}
