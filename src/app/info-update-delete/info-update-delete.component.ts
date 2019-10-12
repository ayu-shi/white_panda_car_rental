import { Component, OnInit } from '@angular/core';
import Car from '../Car';
import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-update-delete',
  templateUrl: './info-update-delete.component.html',
  styleUrls: ['./info-update-delete.component.css']
})
export class InfoUpdateDeleteComponent implements OnInit {

  Cars: Car[];

  constructor(private bs: BusinessService, private router:Router) { }

  deletecar(id) {
    this.bs.deletecar(id).subscribe(res => {
      alert('Car Deleted');
      this.router.navigateByUrl('/car/create');
    });
  }

  ngOnInit() {
    this.bs
      .getcars()
      .subscribe((data: Car[]) => {
       this.Cars = data;
    });
  }


}
