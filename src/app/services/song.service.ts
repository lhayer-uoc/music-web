
import { Injectable } from '@angular/core';
import {Song} from 'src/app/interfaces/song';
import { SONGS } from '../songs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  getSongs(): Song[] {
    return SONGS
     
  }

  constructor() { }
}