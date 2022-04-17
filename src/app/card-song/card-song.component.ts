import { SongsService } from './../service/songs.service';
import { SongViewModel } from './../model/SongViewModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.scss']
})
export class CardSongComponent implements OnInit {
  @Input() song:SongViewModel

  constructor(private songService:SongsService) { }

  ngOnInit(): void {
    this.songService.getSongById

  }

  onFavirteClick() {
     if (this.song.liked){
     this.songService.addLike(this.song.id).subscribe(res =>{
       this.song.likesCount++
     });
     }
     else {
     this.songService.UnLike(this.song.id).subscribe(res=>{
    this.song.likesCount--
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

