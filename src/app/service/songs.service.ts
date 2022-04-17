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

  addLike(song: SongListViewModel): Observable<SongListViewModel> {
    return this.http.post<SongListViewModel>(this.url+'Songs/Like', song.id)
  }
  UnLike(song: SongListViewModel): Observable<SongListViewModel> {
    return this.http.post<SongListViewModel>(this.url+'Songs/UnLike', song.id)
  }

}
