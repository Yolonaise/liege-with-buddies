import { MenuComponent } from 'src/app/menu/menu.component';
import { IMenu } from 'src/Interface/menu.interface';


export class AppService {
    private menu: MenuComponent = undefined;

    constructor() {

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
}