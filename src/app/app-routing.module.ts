import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ArtistGuestsComponent } from './artist-guests/artist-guests.component';
import { AuthorGuestsComponent } from './author-guests/author-guests.component';
import { GuestsOfHonorComponent } from './guests-of-honor/guests-of-honor.component';
import { ScientificGuestsComponent } from './scientific-guests/scientific-guests.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: '', redirectTo: '/Splash', pathMatch: 'full' },
  { path: 'Splash', component: SplashComponent },
  { path: 'GOH', component: GuestsOfHonorComponent },
  { path: 'Authors', component: AuthorGuestsComponent },
  { path: 'Artists', component: ArtistGuestsComponent },
  { path: 'Scientists', component: ScientificGuestsComponent }
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
