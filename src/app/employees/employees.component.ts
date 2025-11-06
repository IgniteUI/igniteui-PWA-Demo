import { Component, OnDestroy, OnInit } from '@angular/core';
import { IgxPieChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { NorthwindService } from '../services/northwind.service';
import { IgxNavbarModule, IgxGridComponent, IgxColumnComponent } from 'igniteui-angular';

@Component({
  selector: 'app-employees',
  imports: [IgxPieChartModule, IgxNavbarModule, IgxGridComponent, IgxColumnComponent],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    public northwindService: NorthwindService,
  ) {}


  ngOnInit() {
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindEmployees = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getUniqueDepartments() {
  const unique = new Set(this.northwindEmployees.map(e => e.title));
  return unique.size;
}

getAverageTenure() {
  const currentYear = new Date().getFullYear();
  const avg = this.northwindEmployees
    .map(e => currentYear - new Date(e.hireDate).getFullYear())
    .reduce((a, b) => a + b, 0) / this.northwindEmployees.length;
  return avg.toFixed(1);
}

}
