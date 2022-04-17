import { AlbumsService } from './../service/albums.service';
import { SongListViewModel } from './../model/SongListViewModel';
import { Component, OnInit, Input } from '@angular/core';
import { AlbumViewModel } from '../model/AlbumViewModel';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss']
})
export class CardAlbumComponent implements OnInit {
 @Input() album:AlbumViewModel
  song:SongListViewModel
  constructor(private albmService:AlbumsService) { }

  ngOnInit(): void {
    this.albmService.getAlbumById

  }

}
