
import { ArtistListViewModel } from './model/ArtistListViewModel';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { AlbmusComponent } from './albmus/albmus.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { ArtistCardComponent } from './artist-card/artist-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistsDetailesComponent } from './artists-detailes/artists-detailes.component';
import { CardSongComponent } from './card-song/card-song.component';
import { CardAlbumComponent } from './card-album/card-album.component';

@NgModule({
  declarations: [
    AppComponent,

    AlbmusComponent,

    ArtistCardComponent,
    ArtistListComponent,
    ArtistsDetailesComponent,
    CardSongComponent,
    CardAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
