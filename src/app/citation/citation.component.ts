import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/Interface/menu.interface';

import * as uuid from 'uuid';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.scss']
})
export class CitationComponent implements OnInit, IMenu {
  htmlId: string = uuid.v4();;
  name: string = "Liege";

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.addFeature(this);
  }
}
