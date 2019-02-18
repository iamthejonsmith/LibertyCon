import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestsOfHonorComponent } from './guests-of-honor/guests-of-honor.component';
import { AuthorGuestsComponent } from './author-guests/author-guests.component';
import { ArtistGuestsComponent } from './artist-guests/artist-guests.component';
import { ScientificGuestsComponent } from './scientific-guests/scientific-guests.component';
import { SplashComponent } from './splash/splash.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GuestsOfHonorComponent,
    AuthorGuestsComponent,
    ArtistGuestsComponent,
    ScientificGuestsComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [SplashComponent]
})
export class AppModule { }
