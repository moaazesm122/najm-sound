import { AlbumsService } from './../service/albums.service';
import { SongsService } from './../service/songs.service';
import { ArtistService } from './../service/artist.service';
import { ActivatedRoute } from '@angular/router';
import { SongViewModel } from './../model/SongViewModel';
import { AlbumViewModel } from './../model/AlbumViewModel';
import { ArtistListViewModel } from './../model/ArtistListViewModel';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-artists-detailes',
  templateUrl: './artists-detailes.component.html',
  styleUrls: ['./artists-detailes.component.scss']
})
export class ArtistsDetailesComponent implements OnInit {
  artist:ArtistListViewModel
 album:AlbumViewModel
 song:SongViewModel
  id;

  constructor(private router:ActivatedRoute,private artistService:ArtistService,
    private albumService: AlbumsService,private SongService:SongsService) { }

  ngOnInit(): void {
    this.id= this.router.snapshot.params['id']
    console.log(this.id)
    this.artistService.getAllArtis()
    this.albumService.getAlbumById(this.id)
    this.SongService.getSongById(this.id)
    this.SongService.addLike(this.id)
    this.SongService.UnLike(this.id)

  }

}
