import { MenuComponent } from 'src/app/menu/menu.component';
import { IMenu } from 'src/Interface/menu.interface';
import { Injectable } from '@angular/core';
import { IScrollListener } from 'src/Interface/scrolllistener.interface';

@Injectable()
export class AppService {
    private menu: MenuComponent = undefined;
    private allLaoded: boolean;

    constructor() {
        this.allLaoded = false;
    }

    setMenu(menu: MenuComponent) {
        if (menu === undefined)
            throw ('AppService.Menu: Menu parameter is undefined');

        this.menu = menu;
    }

    addFeature(m: IMenu) {
        if (this.menu === undefined)
            return;

        this.menu.add(m);
    }

    featureLoaded(m: IMenu) {
        if (this.menu == undefined)
            return;

        if (m == undefined)
            return;

        m.loaded = true;

        let tmp = true;
        this.menu.menus.forEach(m => {
            tmp = !m.loaded ? false : tmp;
        });

        this.allLaoded = tmp;
    }

    notifyFeatureOnScreen(sl: IScrollListener) {
        this.menu.isOnScreen(sl);
    }

    scrollToNext(m: IMenu) {
        for (let i = 0; i < this.menu.menus.length - 2; i++) {
            if(m.htmlId == this.menu.menus[i].htmlId){
                this.menu.scrollTo(this.menu.menus[i + 1]);
            }
        }
    }
}