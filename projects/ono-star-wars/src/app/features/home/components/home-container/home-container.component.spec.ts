import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { HomeContainerComponent } from './home-container.component';
import { HomeModule } from '@features/home/home.module';
import { homeRoutes } from '@features/home/home-routing.module';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HomeModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(homeRoutes),
      ],
    });

    router = TestBed.inject(Router);
    router.initialNavigation();

    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header component', () => {
    const headerComponent = fixture.debugElement.query(
      By.css('ono-sw-home-header')
    );
    expect(headerComponent).toBeTruthy();
  });

  it('should render the movies component', fakeAsync(() => {
    router.navigate(['']);
    tick();

    fixture.detectChanges();

    const movieComponent = fixture.debugElement.query(
      By.css('ono-sw-home-movies')
    );

    expect(movieComponent).toBeTruthy();
  }));

  it('should render the movies detail component', fakeAsync(() => {
    router.navigate(['/detail/1/movie-1']);
    tick();

    fixture.detectChanges();

    const movieComponent = fixture.debugElement.query(
      By.css('ono-sw-home-movie-detail')
    );

    expect(movieComponent).toBeTruthy();
  }));

  it('should render the sky and stars', () => {
    const skyElement = fixture.debugElement.query(By.css('.sky'));
    expect(skyElement).toBeTruthy();

    const starsElements = fixture.debugElement.queryAll(By.css('.stars'));
    const mediumStarsElement = fixture.debugElement.query(
      By.css('.stars--medium')
    );
    const largeStarsElement = fixture.debugElement.query(
      By.css('.stars--large')
    );

    expect(starsElements.length).toBeTruthy();
    expect(mediumStarsElement).toBeTruthy();
    expect(largeStarsElement).toBeTruthy();
  });
});
