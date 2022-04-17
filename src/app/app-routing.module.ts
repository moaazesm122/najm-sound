import { Routes } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistsDetailesComponent } from './artists-detailes/artists-detailes.component';

 export const routes: Routes = [
  {
    path: '',
    component: ArtistListComponent
  },
  {
    path:'artistDetailes/:id',
    component:ArtistsDetailesComponent
  }
];
