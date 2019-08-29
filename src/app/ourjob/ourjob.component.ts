import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/Interface/menu.interface';

import * as uuid from 'uuid';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-ourjob',
  templateUrl: './ourjob.component.html',
  styleUrls: ['./ourjob.component.scss']
})
export class OurjobComponent implements OnInit, IMenu {
  htmlId: string = uuid.v4();
  name: string = "Our Job";
  loaded: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.addFeature(this);
  }

  ngAfterViewInit() {
    this.appService.featureLoaded(this)
  }
}
