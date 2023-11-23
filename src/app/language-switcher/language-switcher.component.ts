import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  selectedLanguage: string = 'en'; // Default language

  constructor(private languageService: LanguageService) {}

  changeLanguage(language: string): void {
    this.selectedLanguage = language;
    this.languageService.changeLanguage(language);
  }
}
