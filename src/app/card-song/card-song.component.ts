import { SongsService } from './../service/songs.service';
import { SongViewModel } from './../model/SongViewModel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.scss']
})
export class CardSongComponent implements OnInit {
  @Input() song:SongViewModel
  @Output("c") c = new EventEmitter()
  constructor(private songService:SongsService) { }

  ngOnInit(): void {
    this.songService.getSongById
    this.SongDeatiels = ["/SongAristRote", this.song?.id]
  }


  SongDeatiels;

  cardClick() {

    this.c.emit("")
  }


  
  onFavirteClick(event) {
    event.stopPropagation()
    if (!this.song.liked) {
      this.songService.addLike(this.song.id).subscribe(res => {
        this.song.likesCount++
        this.song.liked=true
      }

      );

    }
    else {

      this.songService.UnLike(this.song.id).subscribe(res => {
        this.song.likesCount--
        this.song.liked=false
    
        });
    }
  }

  get likeColor() {
    if (this.song.liked)
      return "warn";
    else
      return "";
  }

  
}

