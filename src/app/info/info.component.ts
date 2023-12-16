import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-new-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class NewInfoComponent {
  currentSection = 'section0';
  maxSections: number = 8;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.scrollY;
    this.currentSection = this.getCurrentSection(scrollPosition);
  }

  private getCurrentSection(scrollPosition: number): string {
    let currentSection = '';
    
    for (let i = 0; i < this.maxSections; i++) {
      const section = `section${i + 1}`;
      const element = this.el.nativeElement.querySelector(`#${section}`);

      if (element) {
        const offset = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= offset && scrollPosition < offset + height) {
          currentSection = section;
          break; // Break the loop once the current section is found
        }
      }
    }


    return currentSection;
  }

  generateSectionIds(max: number): string[] {
    return Array.from({ length: max }, (_, i) => `section${i + 1}`);
  }

  ngOnInit() {
    this.currentSection = 'section0'; 
  }
}
