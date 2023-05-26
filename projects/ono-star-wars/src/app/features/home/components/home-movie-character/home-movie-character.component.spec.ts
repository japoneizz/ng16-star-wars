import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { CardComponent } from 'ono-ui';
import { HomeMovieCharacterComponent } from '@features/home/components/home-movie-character/home-movie-character.component';
import { ICharacter } from '@features/home/models/character';
import { CharacterService } from '@features/home/services/character.service';

describe('HomeMovieCharacterComponent', () => {
  let component: HomeMovieCharacterComponent;
  let fixture: ComponentFixture<HomeMovieCharacterComponent>;
  let characterService: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMovieCharacterComponent],
      imports: [HttpClientTestingModule, CardComponent],
      providers: [CharacterService],
    });
    fixture = TestBed.createComponent(HomeMovieCharacterComponent);
    component = fixture.componentInstance;
    characterService = TestBed.inject(CharacterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize character$ with the character from CharacterService', () => {
    const mockCharacter: ICharacter = { name: 'Luke Skywalker' };
    jest
      .spyOn(characterService, 'getCharacter')
      .mockReturnValue(of(mockCharacter));

    component.characterId = '1';
    fixture.detectChanges();

    expect(component.character$).toBeDefined();
    component.character$.subscribe((character: ICharacter) => {
      expect(character).toEqual(mockCharacter);
    });
  });
});
