export interface IMovie {
  id: number;
  episodeId: number;
  title: string;
  director: string;
  releaseDate: string;
  linkTitle: string;
}

export class Movie implements IMovie {
  public linkTitle: string;

  constructor(
    public id: number,
    public episodeId: number,
    public title: string,
    public director: string,
    public releaseDate: string
  ) {
    this.linkTitle = this.title.toLowerCase().replace(/\s+/g, '-');
  }
}
