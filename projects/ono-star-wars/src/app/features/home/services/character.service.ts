import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

import { IRequest } from '@core/models';
import { ConnectorService } from '@core/services/connector.service';
import { IResponseCharacter } from '@features/home/models/response-character';
import { ICharacter } from '@features/home/models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly CHARACTER_URL = 'people';

  constructor(private _connectorApi: ConnectorService) {}

  getCharacter(characterId: string): Observable<ICharacter> {
    const req: IRequest = {
      endPoint: `${this.CHARACTER_URL}/${characterId}`,
    };

    return this._connectorApi.get<IResponseCharacter>(req).pipe(
      switchMap((res) => {
        const character: Readonly<ICharacter> = { name: res.name };

        return of(character);
      })
    );
  }
}
