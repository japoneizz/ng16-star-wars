import { Component } from '@angular/core';
import { MovieService } from '@features/home/services/movie.service';

@Component({
  selector: 'ono-sw-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.scss'],
})
export class HomeMoviesComponent {
  public loading = false;
  public hovering: number | undefined = undefined;
  public allMovies$ = this._movieService.getAllMovieBanners();

  constructor(private _movieService: MovieService) {}

  onMouseEnter(bannerId: number) {
    this.hovering = bannerId;
  }

  onMouseLeave() {
    this.hovering = undefined;
  }

  onClick() {
    console.log('click');
  }
}
