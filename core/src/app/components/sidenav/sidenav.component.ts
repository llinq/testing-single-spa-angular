import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  showFiller: boolean;

  constructor(
    private sidenavService: SidenavService
  ) { 
    this.sidenavService.onOpenMenu().subscribe(() => {
      this.sidenav.toggle();
    });
  }

  ngOnInit(): void {
  }

}
