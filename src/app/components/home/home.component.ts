import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  songSelected: Song = {
    track: 0,
    title: '',
    author: '',
    year: 0,
    country: '',
    album: '',
    genre: ''
  };

  ngOnInit(): void {
    this.songSelected = {
      track: 1,
      title: 'Imperium',
      author: 'Thom Jurek',
      year: 2022,
      country: '',
      album: 'Impera',
      genre: 'Pop/Rock'
    };
  }

}
