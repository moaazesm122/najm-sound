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

  @Input() artist: ArtistListViewModel;
  @Output("c") c = new EventEmitter()

  constructor(private artistService: ArtistService) { }
  ngOnInit() {

    this.detailsRote = ["/artistDetailes", this.artist?.id]
  }
  detailsRote;
  onFavirteClick(event) {
    event.stopPropagation()

    if (!this.artist.liked) {
      this.artistService.addLike(this.artist.id).subscribe(res => {
        this.artist.likesCount++
        this.artist.liked=true
      }

      );

    }
    else {

      this.artistService.UnLike(this.artist.id).subscribe(res => {
        this.artist.likesCount--
        this.artist.liked=false
    
        });
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


