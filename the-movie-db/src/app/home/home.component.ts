import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../movies.service'
import { Movies } from '../model/movies.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ MoviesService ]
})
export class HomeComponent implements OnInit {
  public movies: Movies[]
  public urlmovie: string
  constructor( private moviesService: MoviesService) { }

  ngOnInit() {
    this.onSubscribe()
  }

  onSubscribe(){
    this.moviesService.getMoviesAll().subscribe(result => {
      console.log( result )
      this.movies = result.results
    })
  }

  public getUrlMovie(url: string){
    return 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + url
  }

}
