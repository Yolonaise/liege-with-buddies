import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';
import { ConfigService } from 'src/services/config.service';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'liege-with-buddies';

  constructor(public appService: AppService, public configService: ConfigService) {

  }

  ngOnInit() {
    AOS.init();
  }
}
