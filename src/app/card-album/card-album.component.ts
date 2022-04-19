import { ArtistListViewModel } from './../model/ArtistListViewModel';
import { AlbumsService } from './../service/albums.service';
import { SongListViewModel } from './../model/SongListViewModel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlbumViewModel } from '../model/AlbumViewModel';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss']
})
export class CardAlbumComponent implements OnInit {
 @Input() album:AlbumViewModel
  song:SongListViewModel
  @Output("c") c = new EventEmitter()
  @Input() artist: ArtistListViewModel;
  constructor(private albmService:AlbumsService) { }

  ngOnInit(): void {
    this.albmService.getAlbumById
    this.SongAristRote = ["/SongByIDLists", this.album?.id]
  }


  SongAristRote;

  cardClick() {

    this.c.emit("")
  }
}
