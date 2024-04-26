import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { citiesResponse } from '../interfaces/citiesInterface';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private departmentUrl = 'https://api-colombia.com/api/v1/Department'
  constructor(private readonly http: HttpClient) { }
  getDepartment(): Observable<citiesResponse[]>{
    return this.http.get<citiesResponse[]>(this.departmentUrl)
  }
  getCities(id: number): Observable<citiesResponse[]>{
    return this.http.get<citiesResponse[]>(`${this.departmentUrl}/${id}/cities`)
  }

}
