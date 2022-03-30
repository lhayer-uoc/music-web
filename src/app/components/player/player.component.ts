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

  stop = true;
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
      const prefix = 'assets/music/'
      return `${prefix}/${songLocalPath}`;
    }
    return '';

  }

 onPlay(){
     /*this.audio.play();
    this.interval = setInterval(function () {
      //do nothing. this just keeps the bar refreshing
    }, 1000);
    this.stop = false;*/
  }
  onPause(){
    /*clearInterval(this.interval);
    this.audio.pause();
    this.stop = true;*/
  }

  onRandom(){

  }
  onBack(){

  }
  onNext(){

  }
  onLoop(){

  }

  ngOnDestroy(): void {
      if (this.currentSelectedSongSubscription) {
        this.currentSelectedSongSubscription.unsubscribe();
      }
  }

}
