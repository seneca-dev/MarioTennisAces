import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private charactersUrl = 'api/characters';

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl).pipe(catchError(this.handleError('getCharacters', [])));
  }

  getCharacter(name: string): Observable<Character> {
    const url = `${this.charactersUrl}/${name}`;
    return this.http.get<Character>(url).pipe(tap(_ => this.log(`fetched character name=${name}`)), catchError(this.handleError<Character>(`getCharacter name=${name}`)));
  }

  private log(message: string) {
    this.messageService.add(`CharacterService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
