import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../language.service';
import * as enTranslation from '../../assets/locale/en.json';
import * as itTranslation from '../../assets/locale/it.json';

interface Translations {
  [key: string]: string;
}

const translations: { [key: string]: Translations } = {
  en: enTranslation,
  it: itTranslation
};

@Pipe({
  name: 'translate',
  pure: false // Mark the pipe as not pure
})
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(value: string, args?: any): string {
    //console.log('TranslatePipe transform called with value:', value);

    // Check if translations are available for the current language and the specified value
    const currentLanguage = this.languageService.currentLanguageValue;
    const translatedValue = translations?.[currentLanguage]?.[value];

    // Return the translated value if available, otherwise, fallback to the original value
    const result = translatedValue !== undefined ? translatedValue : value;
    //console.log('Result:', result);
    return result;
  }
}
