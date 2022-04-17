import { SongsService } from './../service/songs.service';
import { SongViewModel } from './../model/SongViewModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.scss']
})
export class CardSongComponent implements OnInit {
 song:SongViewModel
 id:any
  constructor(private songService:SongsService) { }

  ngOnInit(): void {
    this.songService.getSongById(this.song.id).subscribe(res=>{

    })
    this.songService.addLike(this.id).subscribe(res=>{

    },)
    this.songService.UnLike(this.id).subscribe(res=>{

    },)
  }

}
