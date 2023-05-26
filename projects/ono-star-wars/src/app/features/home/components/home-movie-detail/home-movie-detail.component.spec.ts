import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CardComponent, ImageComponent } from 'ono-ui';
import { HomeMovieDetailComponent } from '@features/home/components/home-movie-detail/home-movie-detail.component';
import { MovieService } from '@features/home/services/movie.service';
import { MovieDetail } from '@features/home/models/movie-details';

const activatedMockStub = {
  snapshot: {
    paramMap: {
      get: (param: string) => {
        return '1';
      },
    },
  },
};

const movieServiceStub = {
  getMovieDetails: (movieId: string) => {
    if (movieId === '1') {
      return of({ id: '1', title: 'Movie 1' });
    } else {
      return of(null);
    }
  },
};

describe('HomeMovieDetailComponent', () => {
  let component: HomeMovieDetailComponent;
  let fixture: ComponentFixture<HomeMovieDetailComponent>;
  let movieService: MovieService;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMovieDetailComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ImageComponent,
        CardComponent,
      ],
      providers: [
        {
          provide: MovieService,
          useValue: movieServiceStub,
        },
        {
          provide: ActivatedRoute,
          useValue: activatedMockStub,
        },
      ],
    });

    fixture = TestBed.createComponent(HomeMovieDetailComponent);
    component = fixture.componentInstance;

    movieService = TestBed.inject(MovieService);
    activatedRoute = TestBed.inject(ActivatedRoute);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMovieDetail and set moviesDetail$ correctly', () => {
    const movieDetail: MovieDetail = new MovieDetail(
      'Title',
      1,
      'Sinopse',
      'Director 1',
      'Producer 1',
      '2023-01-01',
      ['1', '2']
    );
    jest
      .spyOn(movieService, 'getMovieDetails')
      .mockReturnValue(of(movieDetail));

    component.ngOnInit();

    expect(component.moviesDetail$).toBeDefined();
    component.moviesDetail$.subscribe((detail: MovieDetail) => {
      expect(detail).toEqual(movieDetail);
    });

    expect(movieService.getMovieDetails).toHaveBeenCalledWith('1');
  });
});
