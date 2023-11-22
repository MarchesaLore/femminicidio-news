// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { InformationComponent } from './information/information.component';
import { MenuComponent } from './menu/menu.component.spec';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ReportingComponent } from './reporting/reporting.component';
import { NewsService } from './news.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent,
    MenuComponent,
    NewsFeedComponent,
    ReportingComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule, 
  ],
  providers: [NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
