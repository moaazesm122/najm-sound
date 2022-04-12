import { AlbumsViewModel } from './AlbumListViewModel';
import { SongListViewModel } from './SongListViewModel';
export class ArtistViewModel{ 
    id:number
    name:string
   
    info:string
   
    instgramUri:string
   
    liked:boolean
    songs	:[
   
    SongListViewModel:{
    id:number
    name:string
   
    artistId:number
    artist:string
   
    length:string
   
    releaseYear:string
   
    likesCount:number
    liked:boolean
    }]
    albums:	[
   
        AlbumsViewModel:{
    id:number
    name:string
   
    artistId:number
    artist:string
   
    about:string
   
    releaseYear:string
   
    songsCount:number
    }]
    likesCount:number
    songsCount:number
    
    albumsCount:number
    
    }