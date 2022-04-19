import { AlbumsService } from './../service/albums.service';
import { ArtistViewModel } from './../model/ArtistViewModel';
import { AlbumsViewModel } from './../model/AlbumListViewModel';
import { ArtistService } from './../service/artist.service';
import { ActivatedRoute } from '@angular/router';
import { ArtistListViewModel } from './../model/ArtistListViewModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-song-by-album-lists',
  templateUrl: './get-song-by-album-lists.component.html',
  styleUrls: ['./get-song-by-album-lists.component.scss']
})
export class GetSongByAlbumListsComponent implements OnInit {
  artist:ArtistListViewModel
  id;
  album:AlbumsViewModel

  constructor(private router:ActivatedRoute,private albumService:AlbumsService) { }

  ngOnInit(): void {
    this.id= this.router.snapshot.params['id']

    this.albumService.getAlbumById(this.id).subscribe(a=>{
      this.album = a;
    });
    }

}