import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }
  public getFilms(): Observable <any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=995eea7c39c97b0b47ed9127ae26aabf');
  }
  public getFilm(id: number): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=995eea7c39c97b0b47ed9127ae26aabf');
  }
}
