import { environment } from './../../environments/environment';
import { ArtistListViewModel } from './../model/ArtistListViewModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistViewModel } from '../model/ArtistViewModel';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
   url="https://localhost:5001/api/Artists"
  constructor(private http:HttpClient) { }
    
  getAllArtis(): Observable<ArtistListViewModel[]> {
    return this.http.get<ArtistListViewModel[]>(this.url)
  }

  getArtistById(id:number){
      
    return this.http.get<ArtistViewModel>(this.url+ '/' + id);

  }

    addLike(art: ArtistListViewModel): Observable<ArtistListViewModel> {
    return this.http.post<ArtistListViewModel>(this.url+'/Like', art.id)
  }
  UnLike(art: ArtistListViewModel): Observable<ArtistListViewModel> {
    return this.http.post<ArtistListViewModel>(this.url+'/UnLike', art.id)
  }


}
