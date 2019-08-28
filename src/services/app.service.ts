import { MenuComponent } from 'src/app/menu/menu.component';
import { IMenu } from 'src/Interface/menu.interface';


export class AppService {
    private menu: MenuComponent = undefined;
    public allLaoded: boolean = false;
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

    featureLoaded(m: IMenu){
        if(this.menu == undefined)
            return;
        if(m == undefined)
            return;

        m.loaded = true;
        console.log(m.name + ' is loaded');
        let tmp = true;
        this.menu.menus.forEach(m => {
            tmp = !m.loaded ? false : this.allLaoded;
        });

        this.allLaoded = tmp;
        if(this.allLaoded)
            console.log('all component are loaded');
    }
}