import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {

  cancion=Playlist;

  selectedCancion?: Cancion;

  onSelect(cancion: Cancion): void {
    this.selectedCancion = cancion;
  }

  constructor() {}

  ngOnInit(): void {}

}