import { Component, OnInit } from '@angular/core';
import Car from '../Car';
import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css']
})
export class BookCarComponent implements OnInit {

  availableCars: any[];
  bookedCars: any[];

  constructor(private bs: BusinessService, private router:Router) { }

  bookcar(id) {
    console.log("come");
    this.bs.bookcar(id).subscribe(res => {
      alert("Booking successful");
      this.router.navigateByUrl('/car/create');
    });
  }

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
