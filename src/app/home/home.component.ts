import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { IMenu } from 'src/Interface/menu.interface';
import { AppService } from 'src/services/app.service';
import { WINDOW } from "src/services/window.service";
import { DOCUMENT } from '@angular/common';

import * as uuid from 'uuid';
import { IScrollListener } from 'src/Interface/scrolllistener.interface';
import { ScrollHelper } from 'src/Helper/scroll.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, IMenu, IScrollListener {
  isOnScreen: boolean;
  loaded: boolean = false;
  htmlId: string = uuid.v4();
  @Input() name: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private appService: AppService) {
  }

  ngOnInit() {
    this.appService.addFeature(this);
  }

  ngAfterViewInit() {
    this.appService.featureLoaded(this);
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

  onArrowClick(){
    this.appService.scrollToNext(this);
  }
}
