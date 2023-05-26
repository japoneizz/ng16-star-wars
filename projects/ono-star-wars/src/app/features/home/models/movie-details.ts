export interface IMovieDetail {
  title: string;
  episodeId: number;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
  characters: string[];
}

export class MovieDetail implements IMovieDetail {
  constructor(
    public title: string,
    public episodeId: number,
    public openingCrawl: string,
    public director: string,
    public producer: string,
    public releaseDate: string,
    public characters: string[]
  ) {}
}
