import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Nullable } from '../interfaces/nullable.type';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class SelectedSongService{

  private selectedSong: Subject<Nullable<Song>> = new ReplaySubject<Nullable<Song>>(1);
  currentSelectedSong = this.selectedSong.asObservable();

  constructor() { }

  setSelectedSong(newSelectedSong: Nullable<Song>) {
    this.selectedSong.next(newSelectedSong);
  }

}
