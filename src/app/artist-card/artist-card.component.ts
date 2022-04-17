import { ArtistService } from './../service/artist.service';
import { ArtistListViewModel } from './../model/ArtistListViewModel';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input() artist;
  @Output() c = new EventEmitter()

  constructor(private artistService: ArtistService, private router: Router) { }
  ngOnInit() {
    console.log(this.artist)
    this.detailsRote = ["/artistDetailes", this.artist?.id]
  }
  detailsRote;
  onFavirteClick(event) {
    event.stopPropagation()
    if (this.artistService.addLike) {
      this.artist.likesCount++
    }
    else {
      this.artist.likesCount--
    }

  }

  get likeColor() {
    if (this.artist.liked)
      return "warn";
    else
      return "";
  }

  cardClick() {

    this.c.emit("")
  }






}


