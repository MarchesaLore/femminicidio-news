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
    //assign an observable to language
    this.currentLanguage = this.currentLanguageSubject.asObservable();
  }

  changeLanguage(language: string): void {
    // updates the current value and notifies all subscribers about the change
    this.currentLanguageSubject.next(language);
  }

  get currentLanguageValue(): string {
    return this.currentLanguageSubject.value;
  }
}
