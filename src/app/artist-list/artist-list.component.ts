

import { ArtistService } from './../service/artist.service';
import { ArtistListViewModel } from './../model/ArtistListViewModel';
import { Component,  OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists$:Observable<ArtistListViewModel[]>;
 
  constructor(private service: ArtistService) { }

  ngOnInit(): void {
 
   this.artists$= this.service.getAllArtis()
  }

}
