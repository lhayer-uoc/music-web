import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from '../interfaces/song';
import { SONGS } from '../songs';

@Injectable({
  providedIn: 'root'
})
export class SelectedSongService{

  private selectedSong = new BehaviorSubject<Song>(null as unknown as Song);
  currentSelectedSong = this.selectedSong.asObservable();

  constructor() { }

  setSelectedSong(newSelectedSong: Song) {
    this.selectedSong.next(newSelectedSong);
  }

}
