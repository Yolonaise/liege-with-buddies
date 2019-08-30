import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from 'src/services/app.service';
import { IMenu } from 'src/Interface/menu.interface';
import { element } from 'protractor';
import { IScrollListener } from 'src/Interface/scrolllistener.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: any[] = [];

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

  scrollTo(id: string) {
    let element = document.getElementById(id);
    if (element === undefined)
      return;

    element.scrollIntoView({ behavior: 'smooth', block: "start" });
  }

  isOnScreen(sl: IScrollListener) {
    if (!this.isMenu(sl))
      return;

    let found = false;
    this.menus.forEach(m => {
      if (this.isScrollListenner(m) && this.isMenu(m) && sl.htmlId == m.htmlId) {
        found = true;
      }
    });

    if (!found)
      return;

    this.menus.forEach(m => {
      if (this.isScrollListenner(m) && this.isMenu(m)) {
        m.isOnScreen = sl.htmlId === m.htmlId;
      }
    });
  }

  isScrollListenner(object: any): object is IScrollListener {
    return object;
  }

  isMenu(object: any): object is IMenu {
    return object;
  }
}
