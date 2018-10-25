import { Injectable } from '@angular/core';
import { Building } from '../../classes/building';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../messages/services/message.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  private buildingsUrl = "http://localhost:8080/api/building"; //ToDo -> Configfile
 

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getBuildings(): Observable<Building[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('Buildingservice: Fetched Buildings')
    return this.http.get<Building[]>(this.buildingsUrl).pipe(
      tap(_ => this.log('Fetched Buildings')),
      catchError(this.handleError('getBuildings', []))
      );
  }


  getBuilding(id: number): Observable<Building> {
    const url = `${this.buildingsUrl}/${id}`;
    return this.http.get<Building>(url).pipe(
      tap(_ => this.log(`fetched Building id=${id}`)),
      catchError(this.handleError<Building>(`getHero id=${id}`))
    );
  }

  updateBuilding(building: Building): Observable<any>{
    this.log(building.toString());
    return this.http.put<Building>(this.buildingsUrl,building,httpOptions).pipe(
      tap(_ => this.log(`Updated Building: ${building.id}`)),
      catchError(this.handleError<any>('updateBuilding'))
    );
  }

  getBuildingTypes(): Observable<String[]>{
    const url = `${this.buildingsUrl}/buildingtypes`;
    return this.http.get<String[]>(url).pipe(
      tap(_ => this.log('Fetched BuildingsTypes')),
      catchError(this.handleError('getBuildingTypes', []))
      );
  }








  private log(message: string) {
    this.messageService.add(`BuildingService: ${message}`);
  }






  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
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
