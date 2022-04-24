import { Input } from '@angular/core';
import { Injectable } from '@angular/core';
import {Song} from 'src/app/interfaces/song';
import { SONGS } from '../songs';
import { ReplaySubject, Subject } from 'rxjs';
import { sample } from 'lodash';
import { SelectedSongService } from 'src/app/services/select-song.service';


@Injectable({
  providedIn: 'root'
})
export class SongService {
  getSongs(): Song[] {
    return SONGS

  }
  private selectedSong: Subject<Song> = new ReplaySubject<Song>(1);
  currentSelectedSong = this.selectedSong.asObservable();
  
  constructor(private selectedSongService: SelectedSongService) { }

  @Input() song: Song;

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

  public getActualSong(): Song {
    const songs = this.getSongs();
    return songs[0];
  }

}
