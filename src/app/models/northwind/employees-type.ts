import { AddressType } from './address-type';

export interface EmployeesType {
  employeeID: number;
  lastName: string;
  firstName: string;
  title: string;
  titleOfCourtesy: string;
  birthDate: Date;
  hireDate: Date;
  address: AddressType;
  managerID: number;
  notes: string;
  avatarUrl: string;
}
