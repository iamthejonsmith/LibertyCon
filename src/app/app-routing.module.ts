import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ArtistGuestsComponent } from './artist-guests/artist-guests.component';
import { AuthorGuestsComponent } from './author-guests/author-guests.component';
import { GuestsOfHonorComponent } from './guests-of-honor/guests-of-honor.component';
import { ScientificGuestsComponent } from './scientific-guests/scientific-guests.component';
import { SplashComponent } from './splash/splash.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventListComponent } from './event-list/event-list.component';
import { CreditsComponent } from './credits/credits.component';
import { ConListComponent } from './con-list/con-list.component';
import { MapComponent } from './map/map.component';
import { AuthorPublisherComponent } from './author-publisher/author-publisher.component';
import { EditorComponent } from './editor/editor.component';
import { FanGuestsComponent } from './fan-guests/fan-guests.component';
import { PerformersComponent } from './performers/performers.component';
import { ProfessionalsComponent } from './professionals/professionals.component';

const routes: Routes = [
  { path: '', redirectTo: '/Splash', pathMatch: 'full' },
  { path: 'Splash', component: SplashComponent },
  { path: 'GOH', component: GuestsOfHonorComponent },
  { path: 'Authors', component: AuthorGuestsComponent },
  { path: 'Artists', component: ArtistGuestsComponent },
  { path: 'Scientists', component: ScientificGuestsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'EventList', component: EventListComponent },
  { path: 'Credits', component: CreditsComponent },
  { path: 'Schedule', component: ConListComponent },
  { path: 'Map', component: MapComponent },
  { path: 'Publishers', component: AuthorPublisherComponent },
  { path: 'Editors', component: EditorComponent },
  { path: 'FanGuests', component: FanGuestsComponent },
  { path: 'Performers', component: PerformersComponent },
  { path: 'Professionals', component: ProfessionalsComponent }
];
export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
