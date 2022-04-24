import { Component, OnInit } from '@angular/core';
import { Nullable } from 'src/app/interfaces/nullable.type';
import { Song } from 'src/app/interfaces/song';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  songSelected: Nullable<Song>;

  ngOnInit(): void {
  }

  public onSongSelected(song: Nullable<Song>): void {
    this.songSelected = song;
  }

}
