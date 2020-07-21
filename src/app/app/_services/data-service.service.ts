import {Data} from '@angular/router/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class DataServiceService {

	private dataSource = new BehaviorSubject('toggleSidebar');
  	data = this.dataSource.asObservable();
	  url = 'http://14.141.215.255:80/Deloitte/api';
	
  	constructor() { }

  	setData(key,value){
  		this.data[key]=value;  		
  	}
  	getDataByKey(key){
  		return this.data[key];
  	}
  	getData(){
  		return this.data;
	}

	getUrl(){
		return this.url;
	}
	
}
