import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent {

  sectionIds = ['introduzione', 'cause', 'contesto', 'etimologia', 'impatto', 'significato', 'sfide', 'uso'];

  constructor(private el: ElementRef) { }
  ngOnInit() {
    // Initial check for active section
    this.checkActiveSection();
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Check for active section on scroll
    this.checkActiveSection();
  }
  checkActiveSection() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Loop through section ids
    this.sectionIds.forEach(sectionId => {
      const section = document.getElementById(sectionId);

      if (this.isElementInViewport(section!)) {
        // Add 'active' class to the corresponding menu item
        const menuItem = document.querySelector(`.page-sub-menu ul li a[fragment=${sectionId}]`);
        if (menuItem && menuItem.parentElement) {
          menuItem.parentElement.classList.add('active');

          // Remove 'active' class from other menu items
          this.sectionIds
            .filter(id => id !== sectionId)
            .forEach(id => {
              const otherMenuItem = document.querySelector(`.page-sub-menu ul li a[fragment=${id}]`);
              if (otherMenuItem && otherMenuItem.parentElement) {
                otherMenuItem.parentElement.classList.remove('active');
              }
            });
        }
      }
    });
  }
  isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }






}