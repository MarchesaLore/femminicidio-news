// news.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = '0d8e6528e7244b6ca0ed128cd183048a';
  private apiUrl = 'https://newsapi.org/v2/everything?';
  private country = 'it';

  constructor(private http: HttpClient) {}

  async getNewsWkeywords(keywords: string[]): Promise<any> {
    let params = new HttpParams().set('country', this.country).set('apiKey', this.apiKey);

    if (keywords && keywords.length > 0) {
      params = params.set('q', keywords.join(' OR '));
    }

    const url = `${this.apiUrl}?${params.toString()}`;

    try {
      const response = await this.http.get(url).toPromise();
      return response;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error; // Re-throw the error to be caught by the caller
    }
  }

  async getNews(): Promise<any> {
    let params = new HttpParams().set('country', this.country).set('apiKey', this.apiKey);
    const url = `${this.apiUrl}?${params.toString()}`;

    try {
      const response = await this.http.get(url).toPromise();
      return response;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error; // Re-throw the error to be caught by the caller
    }
  }
}
