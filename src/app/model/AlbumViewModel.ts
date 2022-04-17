import { SongListViewModel } from './SongListViewModel';
export class AlbumViewModel {
        id: number
        name: string

        artistId: number
        artist: string

        about: string

        releaseYear: string

        songs: [

                SongListViewModel: {
                        id: number
                        name: string

                        artistId: number
                        artist: string

                        length: string

                        releaseYear: string

                        likesCount: number
                        liked: boolean
                }]
        songsCount: number

}
