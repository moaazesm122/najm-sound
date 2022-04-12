import { ArtistService } from './../service/artist.service';
import { ArtistListViewModel } from './../model/ArtistListViewModel';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input() artist: ArtistListViewModel;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private albmuService:ArtistService) { }
  ngOnInit() {
  }


  get likeColor() {

    if (this.artist.liked)
      return "warn";
      else
      return "";
  }
   onClick(){
    console.log('clicked')

  this.newItemEvent.emit
 
}

  addLike(){
    if (this.artist.liked) {
      this.albmuService.UnLike(this.artist).subscribe()
      this.artist.likesCount--
      if(this.artist.likesCount=0){

      }
      }

      
      
      }

      
  }
  


}