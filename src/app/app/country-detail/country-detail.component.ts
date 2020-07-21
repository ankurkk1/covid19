import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { DataServiceService } from '../_services/data-service.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  countryData;
  name;
  totalCases;
  newCases;
  totalDeaths;
  newDeaths;
  totalRecovered;
  activeCases;
  criticalCases;
  population;

  constructor(
    private userService: UserService,
    private dataService: DataServiceService,
  ) { 
    this.countryData = this.dataService.getDataByKey('countryData');
  }

  ngOnInit(): void {
    this.name = this.countryData.name;
    this.totalCases = this.countryData.totalCases;
    this.newCases = this.countryData.newCases;
    this.totalDeaths = this.countryData.totalDeaths;
    this.newDeaths = this.countryData.totalRecovered;
    this.activeCases = this.countryData.activeCases;
    this.criticalCases = this.countryData.criticalCases;
    this.population = this.countryData.population;
  }

}
