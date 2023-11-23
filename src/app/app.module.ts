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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component'; 
import { LanguageService } from './language.service'; 
import { TranslatePipe } from './pipes/translate.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent,
    MenuComponent,
    NewsFeedComponent,
    ReportingComponent,
    ResourcesComponent,
    LanguageSwitcherComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule, 
    BrowserAnimationsModule
  ],
  providers: [NewsService, LanguageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
