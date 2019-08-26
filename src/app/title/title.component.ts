import { Component, OnInit } from '@angular/core';
import { JsLoader } from 'src/Helper/JsLoader';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent extends JsLoader implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    //this.loadScript('../src/app/titile/title.effect.js');
  }

}
