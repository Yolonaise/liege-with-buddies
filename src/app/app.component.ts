import { Component } from '@angular/core';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'liege-with-buddies';

  constructor(private appService: AppService) {
  }
}
