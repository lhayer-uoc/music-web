import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  constructor(private songService: SongService) { }

  @Output() selectedSong: EventEmitter<Song> = new EventEmitter();

  readonly noSongsMessage: string = 'No hay canciones a mostrar.';
  title: string = "Lista de canciones";
  songList: Song[] = [];


  ngOnInit(): void {
    this.songList = this.getSongList();
  }

  public onSelectSong(song: Song): void {
    this.selectedSong.emit(song);
  }

  private getSongList(): Song[] {
    return this.songService.getSongs();
  }

}
