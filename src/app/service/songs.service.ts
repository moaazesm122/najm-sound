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
  url="https://localhost:5001/api/Songs"
 constructor(private http:HttpClient) { }
   

 getSongById(id:number){
     
   return this.http.get<SongViewModel>(this.url+ '/' + id);

 }

   addLike(id): Observable<any> {
   return this.http.post<any>(this.url+'/Like/' + id,{})
 }
 UnLike(id): Observable<any> {
   return this.http.post<any>(this.url+'/UnLike/'+ id,{})
 }


}

