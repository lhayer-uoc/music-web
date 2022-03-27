import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { SelectedSongService } from 'src/app/services/select-song.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  stop: true;
  selectedSong: Song;
  selectedSongService: any;

  ngOnInit(): void {
    this.selectedSongService.currentSelectedSong.subscribe((s: Song) => this.selectedSong = s);
    //this.valuePlayedTime = '00:00'
  }

  getSongDetails(id:number):Song{
    let details = this.selectedSongService.getAlbumDetails(id);
    return details;
  }

  getSongCompleteLocalPath(id:number): string {
    const songLocalPath = this.selectedSong.localPath;
    const prefix = "assets/music/"
    const finalPath =  prefix + "/" + songLocalPath;
    console.log("pasando al reproductor el archivo: " +  finalPath);
    return finalPath;
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

}