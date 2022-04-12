import { environment } from './../../environments/environment';
import { AlbumsViewModel } from './../model/AlbumListViewModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
     url=environment.BaseUrl
  constructor(private http:HttpClient) { }
    getAlbumById(id:number){
      
        return this.http.get<AlbumsViewModel>(this.url+'Albums' + '/' + id);
  
    }
}
