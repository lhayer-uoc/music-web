import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';
import { cloneDeep } from 'lodash';
import { Nullable } from 'src/app/interfaces/nullable.type';
import { SelectedSongService } from 'src/app/services/select-song.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  constructor(private songService: SongService, private selectedSongService: SelectedSongService) { }

  @Output() selectedSong: EventEmitter<Nullable<Song>> = new EventEmitter();

  readonly noSongsMessage: string = 'No hay canciones a mostrar.';
  title: string = "Lista de canciones";
  songList: Song[] = [];
  originalSongList: Song[] = [];
  filter: '';
  displayedColumns: string[] = ['action', 'title', 'album', 'genre'];

  async ngOnInit(): Promise<void> {
    this.songList = await this.getSongList();
    this.originalSongList = cloneDeep(this.songList);
  }

  public onSelectSong(song: Song): void {
    this.selectedSong.emit(song);
  }

  public onFilter(filter: string): void {
    this.applyFilter(filter);
  }

  private async getSongList(): Promise<Song[]> {
    return await firstValueFrom(this.songService.getSongs());
  }

  private applyFilter(filter: string): void {
    const filterNormalized = filter.toLowerCase();
    this.songList = this.originalSongList.filter(
      song => song.author.toLowerCase().includes(filterNormalized) ||
      song.title.toLowerCase().includes(filterNormalized) ||
      song.album.toLowerCase().includes(filterNormalized) ||
      song.genre.toLowerCase().includes(filterNormalized)
    );
  }

  onPlaySong(song: Song) {
    console.log(song);
    this.selectedSongService.setSelectedSong(song);
  }

}
