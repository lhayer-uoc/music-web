import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/interfaces/song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  constructor() { }

  @Output() selectedSong: EventEmitter<Song> = new EventEmitter();

  readonly noSongsMessage: string = 'No hay canciones a mostrar.';
  title: string = "Lista de canciones";
  songList: Song[] = [];


  ngOnInit(): void {
    this.songList = this.getSongList();
    // this.songList = [];
  }

  public onSelectSong(song: Song): void {
    this.selectedSong.emit(song);
  }

  private getSongList(): Song[] {
    return [
      {
        title: 'nombre 1',
        author: 'autor 1',
        year: 2022,
        album: 'album 1',
        genre: 'rock',
        country: '',
        track: 0,
      },
      {
        title: 'nombre 2',
        author: 'autor 2',
        year: 2022,
        album: 'album 2',
        genre: 'rock',
        country: '',
        track: 0,
      },
      {
        title: 'nombre 3',
        author: 'autor 3',
        year: 2022,
        album: 'album 3',
        genre: 'rock',
        country: '',
        track: 0,
      },
      {
        title: 'nombre 4',
        author: 'autor 4',
        year: 2022,
        album: 'album 4',
        genre: 'rock',
        country: '',
        track: 0,
      },
      {
        title: 'nombre 5',
        author: 'autor 5',
        year: 2022,
        album: 'album 5',
        genre: 'rock',
        country: '',
        track: 0,
      },
      {
        country: '',
        track: 0,
        title: 'nombre 6',
        author: 'autor 6',
        year: 2022,
        album: 'album 6',
        genre: 'rock',
      },
      {
        country: '',
        track: 0,
        title: 'nombre 7',
        author: 'autor 7',
        year: 2022,
        album: 'album 7',
        genre: 'rock',
      },
      {
        country: '',
        track: 0,
        title: 'nombre 8',
        author: 'autor 8',
        year: 2022,
        album: 'album 8',
        genre: 'rock',
      },
      {
        country: '',
        track: 0,
        title: 'nombre 9',
        author: 'autor 9',
        year: 2022,
        album: 'album 9',
        genre: 'rock',
      },
      {
        country: '',
        track: 0,
        title: 'nombre 10',
        author: 'autor 10',
        year: 2022,
        album: 'album 10',
        genre: 'rock',
      },
      {
        country: '',
        track: 0,
        title: 'nombre 11',
        author: 'autor 11',
        year: 2022,
        album: 'album 11',
        genre: 'rock',
      },
      {
        country: '',
        track: 0,
        title: 'nombre 12',
        author: 'autor 12',
        year: 2022,
        album: 'album 12',
        genre: 'rock',
      },
      {
        country: '',
        track: 0,
        title: 'nombre 13',
        author: 'autor 13',
        year: 2022,
        album: 'album 13',
        genre: 'rock',
      },
      {
        country: '',
        track: 0,
        title: 'nombre 14',
        author: 'autor 14',
        year: 2022,
        album: 'album 14',
        genre: 'rock',
      },
      {
        country: '',
        track: 0,
        title: 'nombre 15',
        author: 'autor 15',
        year: 2022,
        album: 'album 15',
        genre: 'rock',
      },
      {
        country: '',
        track: 0,
        title: 'nombre 16',
        author: 'autor 16',
        year: 2022,
        album: 'album 16',
        genre: 'rock',
      }
    ]
  }

}
