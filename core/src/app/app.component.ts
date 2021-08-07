import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'core-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'core';

  isLogged: boolean;

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {

    setInterval(() => {
      const user = this.generalService.getLoggedUser();

      if (user) {
        this.isLogged = true;
      }
      else {
        this.isLogged = false;
      }
    }, 1009);
  }
}
