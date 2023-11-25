// news-feed.component.ts

import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  newsArticles: any[] = [];
  userKeyword: string = '';
  predeterminedKW: string[] = ['femminicidio']
 
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
     this.fetchNews();
  }

  async fetchNews(): Promise<void> {
    try {
      //user keyword
      if (this.userKeyword) {
        const response = await this.newsService.getNewsWkeywords([this.userKeyword]);
        this.newsArticles = response.articles;
      } else {
        //if user is not searching specific words then use the filter for predermided keys
        const response = await this.newsService.getNewsWkeywords(this.predeterminedKW);
        this.newsArticles = response.articles;
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  searchNews(): void {
    this.fetchNews();
  }
}
