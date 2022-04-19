import { environment } from './../../environments/environment';
import { AlbumsViewModel } from './../model/AlbumListViewModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  url="https://localhost:5001/api/Albums"
  constructor(private http:HttpClient) { }
    

  getAlbumById(id:number){
      
    return this.http.get<AlbumsViewModel>(this.url+ '/' + id);

  }
}