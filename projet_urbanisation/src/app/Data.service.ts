import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any = [];

  // Use a Subject to send and receive data
 

  constructor() { }

  // Method to send data
  sendData(data: any) {
    this.data  = data;
  }

  // Method to receive data
  receiveData() {
    return this.data;
  }

}