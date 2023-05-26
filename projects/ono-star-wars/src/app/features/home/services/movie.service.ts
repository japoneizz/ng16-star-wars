import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';

import { IRequest } from '@core/models';
import { ConnectorService } from '@core/services/connector.service';
import { IResponseAllMovies } from '@features/home/models/response-all-movies';
import { IMovie, Movie } from '@features/home/models/movie';
import { MovieDetail } from '@features/home/models/movie-details';
import { IResponseMovie } from '@features/home/models/response-movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly MOVIES_URL = 'films';
  private cachedAllMovies$ = new BehaviorSubject<IMovie[]>([]);

  constructor(private _connectorApi: ConnectorService) {}

  getAllMovieBanners(): Observable<IMovie[]> {
    return this.cachedAllMovies$.pipe(
      switchMap((res) => {
        if (res.length) {
          return of(res);
        }

        return this.getAllMovies().pipe(
          switchMap((res) => {
            const banners = res.results.map((movie, index) => {
              const banner: Readonly<IMovie> = new Movie(
                index + 1,
                movie.episode_id,
                movie.title,
                movie.director,
                movie.release_date
              );

              return banner;
            });

            this.cachedAllMovies$.next(banners);

            return of(banners);
          })
        );
      })
    );
  }

  getMovieDetails(movieId: string): Observable<MovieDetail> {
    const req: IRequest = {
      endPoint: `${this.MOVIES_URL}/${movieId}`,
    };

    return this._connectorApi.get<IResponseMovie>(req).pipe(
      switchMap((res) => {
        const characters = res.characters.map((character) =>
          character.replace(/[^0-9]/g, '')
        );

        const movieDetail: Readonly<MovieDetail> = new MovieDetail(
          res.title,
          res.episode_id,
          res.opening_crawl,
          res.director,
          res.producer,
          res.release_date,
          characters
        );

        return of(movieDetail);
      })
    );
  }

  private getAllMovies(): Observable<IResponseAllMovies> {
    const req: IRequest = {
      endPoint: this.MOVIES_URL,
    };

    return this._connectorApi.get<IResponseAllMovies>(req);
  }
}
