import { GetSongDetailesListsComponent } from './get-song-detailes-lists/get-song-detailes-lists.component';
import { GetSongByAlbumListsComponent } from './get-song-by-album-lists/get-song-by-album-lists.component';
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
  },
  {
    path:'SongByIDLists/:id',
    component:GetSongByAlbumListsComponent
  }
  ,
  {
    path:'SongAristRote/:id',
    component:GetSongDetailesListsComponent
  }
];
