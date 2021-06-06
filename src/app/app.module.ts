import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ApiInterceptor } from './services/apiInterceptor';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { MediaCardComponent } from './components/media-card/media-card.component';
import { SwipeListComponent } from './components/swipe-list/swipe-list.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    WelcomeSectionComponent,
    MediaCardComponent,
    SwipeListComponent,
    MoviesPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
