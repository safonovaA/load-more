import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cats';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  public CATS_URL = 'api/cats';
  constructor(private http: HttpClient) { }

  public getCats(page: string = '1', size: string = '4'): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.CATS_URL, {params: {_page: page, _limit: size}});
  }
}
