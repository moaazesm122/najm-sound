import { ArtistsDetailesComponent } from './artists-detailes/artists-detailes.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
