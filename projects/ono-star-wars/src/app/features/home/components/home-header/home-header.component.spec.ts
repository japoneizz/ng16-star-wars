import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageComponent } from 'ono-ui';
import { By } from '@angular/platform-browser';

import { HomeHeaderComponent } from './home-header.component';

describe('HomeHeaderComponent', () => {
  let component: HomeHeaderComponent;
  let fixture: ComponentFixture<HomeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHeaderComponent],
      imports: [ImageComponent],
    });
    fixture = TestBed.createComponent(HomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo component with the correct src and alt attributes', () => {
    const logoElement = fixture.debugElement.query(By.css('.logo'));
    expect(logoElement).toBeTruthy();

    const logoImageElement = logoElement.query(By.css('img'));
    expect(logoImageElement).toBeTruthy();

    const logoSrc = logoImageElement.properties['src'];
    const logoAlt = logoImageElement.properties['alt'];

    expect(logoSrc).toBe('/assets/sw_logo.png');
    expect(logoAlt).toBe('logo');
  });
});
