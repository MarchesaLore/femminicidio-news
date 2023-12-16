// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { MenuComponent } from './menu/menu.component.spec';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ReportingComponent } from './reporting/reporting.component';
import { NewsService } from './news.service'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component'; 
import { LanguageService } from './language.service'; 
import { TranslatePipe } from './pipes/translate.pipe';
import { UltimaSliderComponent } from './ultima-slider/ultima-slider.component';
import { NewInfoComponent } from './info/info.component';
import { InfoMenuComponent } from './info/info.menu.component';
import { SectionComponent } from './info/section.component';
import { VittimeCardsComponent } from "./vittime-cards/vittime-cards.component";




@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        InfoMenuComponent,
        SectionComponent,
        NewInfoComponent,
        MenuComponent,
        NewsFeedComponent,
        ReportingComponent,
        ResourcesComponent,
        LanguageSwitcherComponent,
        TranslatePipe
    ],
    providers: [NewsService, LanguageService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        UltimaSliderComponent,
        VittimeCardsComponent
    ]
})
export class AppModule {}
