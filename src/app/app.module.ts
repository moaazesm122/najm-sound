
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlbmusComponent } from './albmus/albmus.component';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistsDetailesComponent } from './artists-detailes/artists-detailes.component';
import { CardAlbumComponent } from './card-album/card-album.component';
import { CardSongComponent } from './card-song/card-song.component';




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
    
    RouterModule.forRoot(routes),
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
