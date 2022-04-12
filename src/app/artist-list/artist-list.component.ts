import { ArtistService } from './../service/artist.service';
import { ArtistListViewModel } from './../model/ArtistListViewModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists: ArtistListViewModel[] = [];

  constructor(private service: ArtistService) { }

  ngOnInit(): void {
    this.service.getAllArtis().subscribe(a => this.artists = a);
  }

}
