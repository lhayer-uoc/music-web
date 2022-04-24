import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { SelectedSongService } from 'src/app/services/select-song.service';

@Component({
  selector: 'app-song-row',
  templateUrl: './song-row.component.html',
  styleUrls: ['./song-row.component.css']
})
export class SongRowComponent implements OnInit {

  constructor(private selectedSongService: SelectedSongService) { }

  @Input() song: Song;

  ngOnInit(): void {

  }

  playSong(song: Song) {
    this.selectedSongService.setSelectedSong(song);
    console.log(this.selectedSongService)
  }

  
}
