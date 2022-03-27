import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongRowComponent } from './components/song-row/song-row.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongListComponent,
    SongRowComponent,
    HeaderComponent,
    MenuComponent,
    SongDetailComponent,
    ReproductorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
