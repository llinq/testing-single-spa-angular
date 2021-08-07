import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  languages = [
    { flag: 'pt-BR', title: 'portuguese', selected: true },
    { flag: 'es-ES', title: 'spanish', selected: false }
  ];

  selectedLanguage = this.languages[0];

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {

  }

  openMenu(): void {
    this.sidenavService.openMenu();
  }

}
