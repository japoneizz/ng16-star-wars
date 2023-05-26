import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ICharacter } from '@features/home/models/character';
import { CharacterService } from '@features/home/services/character.service';

@Component({
  selector: 'ono-sw-home-movie-character',
  templateUrl: './home-movie-character.component.html',
  styleUrls: ['./home-movie-character.component.scss'],
})
export class HomeMovieCharacterComponent implements OnInit {
  @Input({ required: true }) characterId: string = '';
  public character$ = new Observable<ICharacter>();

  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this.character$ = this._characterService.getCharacter(this.characterId);
  }
}
