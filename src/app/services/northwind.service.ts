import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { Northwind } from '../static-data/northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  public getEmployees(): Observable<EmployeesType[]> {
    return of(Northwind['EmployeesType']);
  }
}
