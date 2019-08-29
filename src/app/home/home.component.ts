import { Component, OnInit, Input } from '@angular/core';
import { IMenu } from 'src/Interface/menu.interface';
import { AppService } from 'src/services/app.service';

import * as uuid from 'uuid';
import { delay } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, IMenu {
  loaded: boolean = false;
  htmlId: string = uuid.v4();
  @Input() name: string;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.addFeature(this);
  }

  ngAfterViewInit() {
    delay(2000).then(() => {
      this.appService.featureLoaded(this);
    });
  }
}
