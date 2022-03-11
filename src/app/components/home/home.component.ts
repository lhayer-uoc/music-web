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
    releaseDate: '',
    title: '',
    author: '',
    year: 0,
    album: '',
    genre: ''
  };

  ngOnInit(): void {
    this.songSelected = {
      releaseDate: ' March 11, 2022',
      title: 'Imperium',
      author: 'Thom Jurek',
      year: 2022,
      album: 'Impera',
      genre: 'Pop/Rock'
    };
  }

}
