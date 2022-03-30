import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class SelectedSongService{

  private selectedSong: Subject<Song> = new ReplaySubject<Song>(1);
  currentSelectedSong = this.selectedSong.asObservable();

  constructor() { }

  setSelectedSong(newSelectedSong: Song) {
    this.selectedSong.next(newSelectedSong);
  }

}
