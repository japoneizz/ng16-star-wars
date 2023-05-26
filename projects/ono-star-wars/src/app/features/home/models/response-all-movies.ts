import { IResponseMovie } from '@features/home/models/response-movie';

export interface IResponseAllMovies {
  count: number;
  next: string;
  previous: string;
  results: IResponseMovie[];
}
