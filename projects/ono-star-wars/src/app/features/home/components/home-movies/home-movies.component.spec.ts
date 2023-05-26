import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { CardComponent, ImageComponent } from 'ono-ui';
import { ConnectorService } from '@core/services/connector.service';
import { HomeMoviesComponent } from '@features/home/components/home-movies/home-movies.component';
import { homeRoutes } from '@features/home/home-routing.module';
import { Movie } from '@features/home/models/movie';
import { Location } from '@angular/common';

const mockMovies = [
  new Movie(1, 1, 'Movie 1', 'Director 1', '2023-01-01'),
  new Movie(2, 2, 'Movie 2', 'Director 2', '2023-02-01'),
];

const mockMovies$: Observable<any> = of(mockMovies);

describe('HomeBannerComponent', () => {
  let component: HomeMoviesComponent;
  let fixture: ComponentFixture<HomeMoviesComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMoviesComponent],
      imports: [
        HttpClientTestingModule,
        CardComponent,
        ImageComponent,
        RouterTestingModule.withRoutes(homeRoutes),
      ],
      providers: [ConnectorService],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(HomeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display movies correctly', () => {
    component.allMovies$ = mockMovies$;

    fixture.detectChanges();

    const cardElements = fixture.debugElement.queryAll(By.css('ono-ui-card'));

    // Assert the number of cards rendered
    expect(cardElements.length).toBe(mockMovies.length);

    const dateOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    // Assert the content of each card
    cardElements.forEach((cardElement, index) => {
      const titleElement = cardElement.query(By.css('.title'));
      const directorElement = cardElement.query(By.css('.director'));
      const releaseDateElement = cardElement.query(By.css('.release-date'));

      expect(titleElement.nativeElement.textContent).toBe(
        mockMovies[index].title
      );

      expect(directorElement.nativeElement.textContent).toBe(
        'Director: ' + mockMovies[index].director
      );

      expect(releaseDateElement.nativeElement.textContent.trim()).toBe(
        'Release date: ' +
          new Date(mockMovies[index].releaseDate).toLocaleDateString(
            'en-US',
            dateOptions
          )
      );
    });
  });

  it('should handle mouse events correctly', () => {
    component.allMovies$ = mockMovies$;

    fixture.detectChanges();

    const allMovieCards = fixture.debugElement.queryAll(By.css('.movie-item'));

    const firstCardElement = allMovieCards[0];
    const secondCardElement = allMovieCards[1];

    firstCardElement.triggerEventHandler('mouseover', mockMovies[0].episodeId);
    fixture.detectChanges();

    expect(firstCardElement.nativeElement.classList.contains('off')).toBe(
      false
    );

    expect(secondCardElement.nativeElement.classList.contains('off')).toBe(
      true
    );

    expect(component.hovering).toBe(mockMovies[0].episodeId);

    firstCardElement.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();

    expect(component.hovering).toBe(undefined);
    expect(firstCardElement.nativeElement.classList.contains('off')).toBe(
      false
    );
    expect(secondCardElement.nativeElement.classList.contains('off')).toBe(
      false
    );
  });

  it('should navigate', fakeAsync(() => {
    component.allMovies$ = mockMovies$;
    fixture.detectChanges();

    const movieCards = fixture.debugElement.queryAll(By.css('.movie-item'));

    // Asserting links
    movieCards.forEach((cardElement, index) => {
      expect(cardElement.nativeElement.getAttribute('href')).toBe(
        `/detail/${mockMovies[index].id}/${mockMovies[index].linkTitle}`
      );
    });

    const firstCard = movieCards[0];
    firstCard.nativeElement.click();
    fixture.detectChanges();

    tick();
    expect(location.path()).toBe('/detail/1/movie-1');
  }));
});
