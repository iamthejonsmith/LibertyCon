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

const routes: Routes = [
  { path: '', redirectTo: '/Splash', pathMatch: 'full' },
  { path: 'Splash', component: SplashComponent },
  { path: 'GOH', component: GuestsOfHonorComponent },
  { path: 'Authors', component: AuthorGuestsComponent },
  { path: 'Artists', component: ArtistGuestsComponent },
  { path: 'Scientists', component: ScientificGuestsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'EventList', component: EventListComponent },
  { path: 'Credits', component: CreditsComponent }
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
