import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { AppService } from 'src/services/app.service';
import { DummyComponent } from './dummy/dummy.component';
import { TitleComponent } from './title/title.component';
import { CitationComponent } from './citation/citation.component';
import { OurjobComponent } from './ourjob/ourjob.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DummyComponent,
    TitleComponent,
    CitationComponent,
    OurjobComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
