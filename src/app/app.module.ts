import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

const a = 'asdfasd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LandingPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// "lint-staged": {
//   "*.js": "eslint --cache --fix"
// }
