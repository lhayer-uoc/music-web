import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Song } from 'src/app/interfaces/song';
import { SelectedSongService } from 'src/app/services/select-song.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy {
  constructor(private selectedSongService: SelectedSongService) {}

  selectedSong: Song;
  currentSelectedSongSubscription: Subscription;

  ngOnInit(): void {
    this.currentSelectedSongSubscription = this.selectedSongService.currentSelectedSong.subscribe((song: Song) => {
      this.selectedSong = song;
    });
  }

  getSongCompleteLocalPath(): string {
    if (this.selectedSong) {
      const songLocalPath = this.selectedSong.localPath;
      return `${songLocalPath}`;
    }
    return '';

  }

  ngOnDestroy(): void {
      if (this.currentSelectedSongSubscription) {
        this.currentSelectedSongSubscription.unsubscribe();
      }
  }

}
