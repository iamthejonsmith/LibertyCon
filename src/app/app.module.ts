import { BrowserModule } from '@angular/platform-browser';
import {
  MatIconModule, MatButtonModule, MatSidenavModule,
  MatToolbarModule, MatCardModule, MatExpansionModule,
  MatDialogModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { Globals, FactoryService } from './factory.service';
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
import { ConListComponent } from './con-list/con-list.component';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { MapComponent } from './map/map.component';
import { AuthorPublisherComponent } from './author-publisher/author-publisher.component';
import { EditorComponent } from './editor/editor.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { FanGuestsComponent } from './fan-guests/fan-guests.component';
import { PerformersComponent } from './performers/performers.component';

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
    CreditsComponent,
    ConListComponent,
    FeedbackDialogComponent,
    MapComponent,
    AuthorPublisherComponent,
    EditorComponent,
    ProfessionalsComponent,
    FanGuestsComponent,
    PerformersComponent
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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StorageServiceModule
  ],
  providers: [Globals, FactoryService],
  bootstrap: [AppComponent],
  entryComponents: [FeedbackDialogComponent]
})
export class AppModule { }
