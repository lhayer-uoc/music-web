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



  ngOnInit(): void {
    this.currentSelectedSongSubscription = this.selectedSongService.currentSelectedSong.subscribe((song: Nullable<Song>) => {
      this.selectedSong = song;
    });
  }

  public async onRandomSong(): Promise<void> {
    if (this.selectedSong) {
      const ramdonSong = await this.songService.getRamdonSong();
      this.selectedSongService.setSelectedSong(ramdonSong);
    } else {
      this.playFirstSong();
    }
  }

  public async onPreviousSong(): Promise<void> {
    if (this.selectedSong) {
      const previousSong = await this.songService.getPreviousSong(this.selectedSong);
      this.selectedSongService.setSelectedSong(previousSong);
    } else {
      this.playFirstSong();
    }

  }

  public async onNextSong(): Promise<void> {
    if (this.selectedSong) {
      const nextSong = await this.songService.getNextSong(this.selectedSong);
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


  async playFirstSong(): Promise<void> {
    const firstSong = await this.songService.getFirstSong();
    this.selectedSongService.setSelectedSong(firstSong);
  }

  playSong(song: Song) {
    this.selectedSongService.setSelectedSong(song);
  }

  ngOnDestroy(): void {
      if (this.currentSelectedSongSubscription) {
        this.currentSelectedSongSubscription.unsubscribe();
      }
  }

}
