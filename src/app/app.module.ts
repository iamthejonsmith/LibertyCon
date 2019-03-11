import { BrowserModule } from '@angular/platform-browser';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatExpansionModule
} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { Globals } from './factory.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestsOfHonorComponent } from './guests-of-honor/guests-of-honor.component';
import { AuthorGuestsComponent } from './author-guests/author-guests.component';
import { ArtistGuestsComponent } from './artist-guests/artist-guests.component';
import { ScientificGuestsComponent } from './scientific-guests/scientific-guests.component';
import { SplashComponent } from './splash/splash.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventListComponent } from './event-list/event-list.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestsOfHonorComponent,
    AuthorGuestsComponent,
    ArtistGuestsComponent,
    ScientificGuestsComponent,
    SplashComponent,
    ContactUsComponent,
    EventListComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
