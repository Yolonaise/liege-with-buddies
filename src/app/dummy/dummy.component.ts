import { Component, OnInit, Input } from '@angular/core';

import { IMenu } from 'src/Interface/menu.interface';
import { AppService } from 'src/services/app.service';

import * as uuid from 'uuid';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit, IMenu {
  htmlId: string = uuid.v4();
  @Input() name: string;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.addFeature(this);
  }
}
