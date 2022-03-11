import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  @Input() song: Song = {
    releaseDate: '',
    title: '',
    author: '',
    year: 0,
    album: '',
    genre: ''
  };

  noSong: string = 'No hay canciones seleccionadas';

  constructor() { }

  ngOnInit(): void {
  }

}
