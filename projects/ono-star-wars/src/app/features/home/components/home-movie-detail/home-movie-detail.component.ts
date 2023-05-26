import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { MovieService } from '@features/home/services/movie.service';
import { MovieDetail } from '@features/home/models/movie-details';

@Component({
  selector: 'ono-sw-home-movie-detail',
  templateUrl: './home-movie-detail.component.html',
  styleUrls: ['./home-movie-detail.component.scss'],
})
export class HomeMovieDetailComponent implements OnInit {
  public moviesDetail$: Observable<MovieDetail> = new Observable();

  constructor(
    private _movieService: MovieService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMovieDetail(this._route.snapshot.paramMap.get('id'));
  }

  private getMovieDetail(movieId: string | null) {
    if (movieId) {
      this.moviesDetail$ = this._movieService.getMovieDetails(movieId);
    }
  }
}
