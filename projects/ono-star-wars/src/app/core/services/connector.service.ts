import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IRequest, IRequestOptions } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ConnectorService {
  constructor(private http: HttpClient) {}

  post<T>(request: IRequest): Observable<T> {
    this._removeNullParams(request.body);

    return this.http.post<T>(
      `/api/${request.endPoint}`,
      request.body,
      this._setOptions(request)
    );
  }

  get<T>(request: IRequest): Observable<T> {
    return this.http.get<T>(
      `/api/${request.endPoint}`,
      this._setOptions(request)
    );
  }

  put<T>(request: IRequest): Observable<T> {
    this._removeNullParams(request.body);

    return this.http.put<T>(
      `/api/${request.endPoint}`,
      request.body,
      this._setOptions(request)
    );
  }

  delete<T>(request: IRequest): Observable<T> {
    return this.http.delete<T>(
      `/api/${request.endPoint}`,
      this._setOptions(request)
    );
  }

  private _setOptions(request: IRequest) {
    const options: IRequestOptions = {};

    if (request.hasOwnProperty('fullResponse')) {
      options.observe = 'response';
    }

    if (request.hasOwnProperty('queryString')) {
      this._removeNullParams(request.queryString);
      options.params = {
        ...request.queryString,
      };
    }

    return options;
  }

  private _removeNullParams(obj: any) {
    for (const prop in obj) {
      if (obj[prop] && obj[prop].length <= 0) {
        delete obj[prop];
      }
    }
  }
}
