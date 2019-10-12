import { Component, OnInit } from '@angular/core';
import Car from '../Car';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-car-get',
  templateUrl: './car-get.component.html',
  styleUrls: ['./car-get.component.css']
})
export class CarGetComponent implements OnInit {

  availableCars: any[];
  bookedCars: any[];

  constructor(private bs: BusinessService) { }

  ngOnInit() {
    this.bs
      .getcars()
      .subscribe((data: Car[]) => {
        console.log(data);
        var keys = Object.keys(data);
        var len = keys.length;
        var acars=[]
        var bcars=[]
        for(let i=0;i<len;i++){
          if(data[i]['booked'] == false)
          acars.push(data[i]);
        else
          bcars.push(data[i]);
        }
        this.availableCars = acars;
        this.bookedCars = bcars;
    });
  }

}
