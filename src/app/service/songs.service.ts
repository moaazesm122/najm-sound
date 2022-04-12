import { environment } from './../../environments/environment';
import { SongViewModel } from './../model/SongViewModel';
import { Observable } from 'rxjs';
import { SongListViewModel } from './../model/SongListViewModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  url=environment.BaseUrl
  constructor(private http:HttpClient) { }


  getSongById(id:number){
      
    return this.http.get<SongViewModel>(this.url+'Artists' + '/' + id);

  }

  addLike(art: SongListViewModel): Observable<SongListViewModel> {
    return this.http.post<SongListViewModel>(this.url+'Songs/Like', art.id)
  }
  UnLike(art: SongListViewModel): Observable<SongListViewModel> {
    return this.http.post<SongListViewModel>(this.url+'Songs/UnLike', art.id)
  }

}
