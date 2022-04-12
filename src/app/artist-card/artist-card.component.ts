import { ArtistService } from './../service/artist.service';
import { ArtistListViewModel } from './../model/ArtistListViewModel';

import { Component, Input, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input() artist: ArtistListViewModel;


  constructor() { }

  ngOnInit() {
  }


  get likeColor() {

    if (this.artist.liked)
      return "warn";
      else
      return "";
  }



}