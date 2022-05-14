import { Input } from '@angular/core';
import { Injectable } from '@angular/core';
import {Song} from 'src/app/interfaces/song';
import { firstValueFrom, map, Observable, ReplaySubject, Subject } from 'rxjs';
import { SelectedSongService } from 'src/app/services/select-song.service';
import { sample } from 'lodash';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Nullable } from '../interfaces/nullable.type';



@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs: Song[] = [];

  getSongs(): Observable<Song[]> {
    return this.firestore.collection('Songs').snapshotChanges().pipe(map(snaps =>{
      return snaps.map((snap: any) =>{
        return <Song>{
          id: snap.payload.doc.id,
          track: snap.payload.doc.get('track'),
          title: snap.payload.doc.get('title'),
          author: snap.payload.doc.get('author'),
          duration: snap.payload.doc.get('duration'),
          year: snap.payload.doc.get('year'),
          country: snap.payload.doc.get('country'),
          album: snap.payload.doc.get('album'),
          genre: snap.payload.doc.get('genre'),
          rating: snap.payload.doc.get('rating'),
          url: snap.payload.doc.get('url'),
          cover_img: snap.payload.doc.get('cover_img'),
        }

      })
    }))
  }


  private selectedSong: Subject<Song> = new ReplaySubject<Song>(1);
  currentSelectedSong = this.selectedSong.asObservable();

  constructor(
    private firestore: AngularFirestore
    ) { }

  @Input() song: Song;

  public async getNextSong(actualSong: Song): Promise<Song> {
    const actualSongIdx = await this.getSongIndex(actualSong);
    const songs = await firstValueFrom(this.getSongs());

    if (actualSongIdx !== -1 && actualSongIdx < (songs.length - 1)) {
      return songs[actualSongIdx + 1];
    }
    return songs[0];

  }

  public async getPreviousSong(actualSong: Song): Promise<Song> {
    const actualSongIdx = await this.getSongIndex(actualSong);
    const songs = await firstValueFrom(this.getSongs());

    if (actualSongIdx !== -1 && actualSongIdx > 0) {
      return songs[actualSongIdx - 1];
    }
    return songs[(songs.length - 1)];

  }

  public async getRamdonSong(): Promise<Song> {
    const songs = await firstValueFrom(this.getSongs());
    const ramdonSong =  sample(songs);
    return ramdonSong ? ramdonSong : songs[0];
  }

  public async getFirstSong(): Promise<Song> {
    const songs = await firstValueFrom(this.getSongs());
    return songs[0];
  }

  private async getSongIndex(searchedSong: Song): Promise<number> {
    const songs = await firstValueFrom(this.getSongs());
    return songs.findIndex(song => song.title === searchedSong.title && song.author === searchedSong.author);
  }

  public async getActualSong(): Promise<Song> {
    const songs = await firstValueFrom(this.getSongs());
    return songs[0];
  }

  public saveSong(song: Nullable<Song>): void {
    if (song) {
      const songObject = this.firestore.collection('Songs').doc(song.id);
      songObject.update({title: song.title})
      songObject.update({album: song.album})
      songObject.update({genre: song.genre})

    }
  }

}
