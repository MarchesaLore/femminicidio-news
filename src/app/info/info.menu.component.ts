import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-menu',
  templateUrl: './info.menu.component.html',
  styleUrl: './info.menu.component.scss'
})
export class InfoMenuComponent {
  @Input() currentSection: string = 'section0';
  @Input() maxSections!: number;

  constructor() {
    this.maxSections = 0;
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

  getRange(max: number): number[] {
    return Array.from({ length: max }, (_, i) => i + 1);
  }
}
