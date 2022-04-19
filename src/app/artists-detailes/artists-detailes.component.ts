import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistViewModel } from './../model/ArtistViewModel';
import { ArtistService } from './../service/artist.service';

@Component({
  selector: 'app-artists-detailes',
  templateUrl: './artists-detailes.component.html',
  styleUrls: ['./artists-detailes.component.scss']
})
export class ArtistsDetailesComponent implements OnInit {

  artist: ArtistViewModel
  id;

  constructor(private router: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    console.log(this.id)
    this.artistService.getArtistById(this.id).subscribe(a => {
      this.artist = a;
    });
  }

}
