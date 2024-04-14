import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/services/api-service.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss']
})
export class ApiCallComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }
  name:any;
  gender:any;
  usersData:any;

  ngOnInit(){
    this.getDataFromApi();
  }

  getDataFromApi() {
    this.apiService.getData().subscribe(
      (data) => {
        this.usersData=data;
        console.log('Data from API:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  createUser(){
    console.log(this.name+" "+this.gender)
    this.apiService.postData(
      {
        "name": this.name,
        "gender": this.gender
      }
    ).subscribe(
      (data) => {
        console.log('Data from API:', data);
        this.getDataFromApi();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
