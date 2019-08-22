import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'liege-with-buddies';
  
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    AOS.init();
  }
}
