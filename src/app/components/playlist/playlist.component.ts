import { Component, OnInit } from '@angular/core';
import { Song } from '../../interfaces/song';
// import { Playlist } from '../../playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {

  // cancion=Playlist;

  selectedCancion?: Song;

  onSelect(cancion: Song): void {
    this.selectedCancion = cancion;
  }

  constructor() {}

  ngOnInit(): void {}

}
