import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { IMenu } from 'src/Interface/menu.interface';

import * as uuid from 'uuid';
import { AppService } from 'src/services/app.service';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from 'src/services/window.service';
import { IScrollListener } from 'src/Interface/scrolllistener.interface';
import { ScrollHelper } from 'src/Helper/scroll.helper';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, IMenu, IScrollListener {
  isOnScreen: boolean;
  htmlId: string = uuid.v4();
  name: string = "Book";
  loaded: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private appService: AppService
  ) { }

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
        console.log(this.name + "is visible");
        this.appService.notifyFeatureOnScreen(this);
      }
    });
  }
}
