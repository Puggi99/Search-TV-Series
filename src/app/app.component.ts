import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { Anime, AnimeBase } from 'src/app/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-tv-series';

  public animeList: Anime[] = []

  constructor(private dataService:DataService){
    this.loadAPI()
  }



  loadAPI(){
    this.dataService.getAPI().subscribe({
      next: anime => this.animeList = anime.data,
      error: err => console.log('there is an error', err)
    })
  }



}
