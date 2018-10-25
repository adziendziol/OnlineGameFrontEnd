import { Injectable } from '@angular/core';
import {Building} from '../../classes/building';
import {Observable, of} from 'rxjs';
import {MessageService} from '../../messages/services/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  private buildingsUrl = "http://localhost:8080/api/building"; //ToDo -> Configfile

  constructor(
    private messageService: MessageService,
    private http: HttpClient){ }

  getBuildings(): Observable<Building[]>{
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('Buildingservice: Fetched Heroes')
    return this.http.get<Building[]>(this.buildingsUrl)
      .pipe(catchError(this.handleError('getHeroes', []))
    );
  }

/*   getBuilding(id: number): Observable<Building> {
    this.messageService.add(`Buildingservice: Fetched Hero with ID:${id}`)
    return of(Buildings.find(building => building.id === id));
  } */

  private log(message: string){
    this.messageService.add(`BuildingService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
