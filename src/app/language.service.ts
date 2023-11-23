import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject: BehaviorSubject<string>;
  public currentLanguage: Observable<string>;

  constructor() {
    // Set the default language to English
    this.currentLanguageSubject = new BehaviorSubject<string>('en');
    this.currentLanguage = this.currentLanguageSubject.asObservable();
  }

  changeLanguage(language: string): void {
    // You can add logic here to load language-specific files if needed
    this.currentLanguageSubject.next(language);
  }

  get currentLanguageValue(): string {
    return this.currentLanguageSubject.value;
  }
}
