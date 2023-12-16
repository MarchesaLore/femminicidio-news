import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input() sectionTitle: string = '';
  @Input() sectionContent: string = '';
  @Input() sectionNumber: number = 0;
  isEven(number: number): boolean {
    return number % 2 === 0;
  }
  
}
