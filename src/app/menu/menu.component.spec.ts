// menu.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isMenuVisible = false;
  constructor() {}

  showhideMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

}
