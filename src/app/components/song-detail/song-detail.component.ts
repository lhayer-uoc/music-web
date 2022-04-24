import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';


@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  @Input() song: Song;

  noSong: string = 'No se ha seleccionado ninguna canción';

  constructor() { }

  ngOnInit(): void {
  }

}
