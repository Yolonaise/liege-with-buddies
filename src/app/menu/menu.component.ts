import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';
import { IMenu } from 'src/Interface/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: IMenu[] = [];

  constructor(private appService: AppService) {
    appService.setMenu(this);
  }

  ngOnInit() {
  }

  add(m: IMenu) {
    if (m === undefined)
      throw "MenuComponent.add: the menu parameter is undefined";

    if (!m.name || m.name === "")
      throw "MenuComponent.add: The menu has no name";

    this.menus.forEach(mm => {
      if (mm.name == m.name)
        throw "MenuComponent.add: The menu " + m.name + " already exits";
    })

    this.menus.push(m);
  }
}
