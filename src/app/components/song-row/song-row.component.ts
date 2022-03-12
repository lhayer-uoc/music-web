import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';

@Component({
  selector: 'app-song-row',
  templateUrl: './song-row.component.html',
  styleUrls: ['./song-row.component.css']
})
export class SongRowComponent implements OnInit {

  constructor() { }

  @Input() song: Song;

  ngOnInit(): void {
  }

}
