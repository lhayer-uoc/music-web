import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  songSelected: Song;

  ngOnInit(): void {
  }

  public onSongSelected(song: Song): void {
    this.songSelected = song;
  }

}
