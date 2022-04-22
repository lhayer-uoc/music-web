import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Nullable } from 'src/app/interfaces/nullable.type';
import { Song } from 'src/app/interfaces/song';
import { SelectedSongService } from 'src/app/services/select-song.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy {
  constructor(private selectedSongService: SelectedSongService, private songService: SongService) {}

  selectedSong: Nullable<Song>;
  currentSelectedSongSubscription: Subscription;
  coverPath = 'assets/images/covers/';


  ngOnInit(): void {
    this.currentSelectedSongSubscription = this.selectedSongService.currentSelectedSong.subscribe((song: Nullable<Song>) => {
      this.selectedSong = song;
    });
  }

  public getCoverPath(): string {
    if (this.selectedSong) {
      const songCoverPath = this.selectedSong.cover_img;
      return `${this.coverPath}${songCoverPath}`;
    }
    return '';
  }

  public onRandomSong(): void {
    if (this.selectedSong) {
      const ramdonSong = this.songService.getRamdonSong();
      this.selectedSongService.setSelectedSong(ramdonSong);
    } else {
      this.playFirstSong();
    }
  }

  public onPreviousSong(): void {
    if (this.selectedSong) {
      const previousSong = this.songService.getPreviousSong(this.selectedSong);
      this.selectedSongService.setSelectedSong(previousSong);
    } else {
      this.playFirstSong();
    }

  }

  public onNextSong(): void {
    if (this.selectedSong) {
      const nextSong = this.songService.getNextSong(this.selectedSong);
      this.selectedSongService.setSelectedSong(nextSong);
    } else {
      this.playFirstSong();
    }

  }

  public onStop(): void {
    if (this.selectedSong) {
      this.selectedSong = null;
      this.selectedSongService.setSelectedSong(this.selectedSong);
    }
  }

  playFirstSong(): void {
    const firstSong = this.songService.getFirstSong();
    this.selectedSongService.setSelectedSong(firstSong);
  }

  ngOnDestroy(): void {
      if (this.currentSelectedSongSubscription) {
        this.currentSelectedSongSubscription.unsubscribe();
      }
  }

}
