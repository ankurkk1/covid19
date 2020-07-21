import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url = 'http://192.168.121.96:8080'; 
  
  constructor(private http: HttpClient) { }

  getCovidStatusWorld(){
    return this.http.get('https://covid-19-rest-api.herokuapp.com/all');
  }

  getCovidStatusCountries(){
    return this.http.get('https://covid-19-rest-api.herokuapp.com/countries');
  }

  getCountryDetails(country){
    return this.http.get('https://covid-19-rest-api.herokuapp.com/countries/'+country);
  }
  
}

 