import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { IMenu } from 'src/Interface/menu.interface';

import * as uuid from 'uuid';
import { AppService } from 'src/services/app.service';
import { WINDOW } from 'src/services/window.service';
import { DOCUMENT } from '@angular/common';
import { ScrollHelper } from 'src/Helper/scroll.helper';
import { IScrollListener } from 'src/Interface/scrolllistener.interface';

@Component({
  selector: 'app-ourjob',
  templateUrl: './ourjob.component.html',
  styleUrls: ['./ourjob.component.scss']
})
export class OurjobComponent implements OnInit, IMenu, IScrollListener {
  isOnScreen: boolean = false;
  htmlId: string = uuid.v4();
  name: string = "Our Job";
  loaded: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private appService: AppService) {
  }

  ngOnInit() {
    this.appService.addFeature(this);
  }

  ngAfterViewInit() {
    this.appService.featureLoaded(this)
  }

  @HostListener('window:scroll', ['$event'])
  onscrollevent(event: any): void {
    ScrollHelper.isOnScreenById(this.htmlId, (v) => {
      if (v && !this.isOnScreen) {
        console.log(this.name + " is visible");
        this.appService.notifyFeatureOnScreen(this);
      }
    });
  }
}
