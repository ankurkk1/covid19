import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../_services/user.service';
import { DataServiceService } from '../_services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalCases;
  totalDeaths;
  totalRecovered;
  activeCases;
  closedCases;
  tableData;  

  constructor(
    private userService: UserService,
    private dataService: DataServiceService,
    private router: Router
  ) { }

  displayedColumns: string[] = ['sno','name', 'totalCases', 'newCases', 'totalDeaths', 'newDeaths','totalRecovered','activeCases','criticalCases','population'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.userService.getCovidStatusWorld().subscribe(data=>{
      this.totalCases = (data as any).totalCases;
      this.totalDeaths = (data as any).totalDeaths;
      this.totalRecovered = (data as any).totalRecovered;
      this.activeCases = (data as any).activeCases;
      this.closedCases = (data as any).closedCases
    });

    this.userService.getCovidStatusCountries().subscribe(data=>{
      this.dataSource = data;
    })
  }

  openCountry(country){
    this.userService.getCountryDetails(country).subscribe(data=>{      
      this.dataService.setData('countryData',data);
      this.router.navigateByUrl('/country-detail');
    })
  }
  

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
