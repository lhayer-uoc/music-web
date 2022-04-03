
import { Injectable } from '@angular/core';
import {Song} from 'src/app/interfaces/song';
import { SONGS } from '../songs';
import { sample } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  getSongs(): Song[] {
    return SONGS

  }

  constructor() { }

  public getNextSong(actualSong: Song): Song {
    const actualSongIdx = this.getSongIndex(actualSong);
    const songs = this.getSongs();

    if (actualSongIdx !== -1 && actualSongIdx < (songs.length - 1)) {
      return songs[actualSongIdx + 1];
    }
    return songs[0];

  }

  public getPreviousSong(actualSong: Song): Song {
    const actualSongIdx = this.getSongIndex(actualSong);
    const songs = this.getSongs();

    if (actualSongIdx !== -1 && actualSongIdx > 0) {
      return songs[actualSongIdx - 1];
    }
    return songs[(songs.length - 1)];

  }

  public getRamdonSong(): Song {
    const songs = this.getSongs();
    const ramdonSong =  sample(songs);
    return ramdonSong ? ramdonSong : songs[0];
  }

  public getFirstSong(): Song {
    const songs = this.getSongs();
    return songs[0];
  }

  private getSongIndex(searchedSong: Song): number {
    const songs = this.getSongs();
    return songs.findIndex(song => song.title === searchedSong.title && song.author === searchedSong.author);
  }
}
