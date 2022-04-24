import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Nullable } from 'src/app/interfaces/nullable.type';
import { Song } from 'src/app/interfaces/song';
import { SelectedSongService } from 'src/app/services/select-song.service';


@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit, OnDestroy {

  @Input() song: Nullable<Song>;

  noSong: string = 'No se ha seleccionado ninguna canción';
  currentSelectedSongSubscription: Subscription;

  constructor(private selectedSongService: SelectedSongService) { }

  ngOnInit(): void {
    this.currentSelectedSongSubscription = this.selectedSongService.currentSelectedSong.subscribe((song: Nullable<Song>) => {
      this.song = song;
    });
  }

  ngOnDestroy(): void {
    if (this.currentSelectedSongSubscription) {
      this.currentSelectedSongSubscription.unsubscribe();
    }
  }

}
