// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { InformationComponent } from './information/information.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ResourcesComponent } from './resources/resources.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'information', component: InformationComponent },
  { path: 'reporting', component: ReportingComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'news-feed', component: NewsFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
