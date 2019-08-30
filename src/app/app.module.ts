import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CitationComponent } from './citation/citation.component';
import { OurjobComponent } from './ourjob/ourjob.component';
import { BookComponent } from './book/book.component';

import { AppService } from 'src/services/app.service';
import { ConfigService } from 'src/services/config.service';
import { WINDOW_PROVIDERS } from "src/services/window.service";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CitationComponent,
    OurjobComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AppService,
    ConfigService,
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
