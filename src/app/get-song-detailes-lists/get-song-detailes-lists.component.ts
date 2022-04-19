import { ArtistService } from './../service/artist.service';
import { ArtistListViewModel } from './../model/ArtistListViewModel';
import { ArtistViewModel } from './../model/ArtistViewModel';
import { SongsService } from './../service/songs.service';
import { ActivatedRoute } from '@angular/router';
import { SongViewModel } from './../model/SongViewModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-song-detailes-lists',
  templateUrl: './get-song-detailes-lists.component.html',
  styleUrls: ['./get-song-detailes-lists.component.scss']
})
export class GetSongDetailesListsComponent implements OnInit {
  artist:ArtistListViewModel
  song:SongViewModel
  id;

  constructor(private router:ActivatedRoute,private sonService:SongsService) { }

  ngOnInit(): void {
    this.id= this.router.snapshot.params['id']
    console.log(this.id)
    this.sonService.getSongById(this.id).subscribe(a=>{
      this.song = a;
    },
    err=>{
      console.log(err)
    });
    }

}
