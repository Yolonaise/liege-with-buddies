import { Component, OnInit, HostListener } from '@angular/core';
import { IMenu } from 'src/Interface/menu.interface';

import * as uuid from 'uuid';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.scss']
})
export class CitationComponent implements OnInit, IMenu {
  loaded: boolean = false;
  htmlId: string = uuid.v4();;
  name: string = "Liege";

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.addFeature(this);
  }

  ngAfterViewInit(){
    this.appService.featureLoaded(this)
  }
}
