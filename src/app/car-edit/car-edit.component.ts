import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
      Vehicle_number : ['', Validators.required ],
      Model_name : ['', Validators.required ],
      Seating_capacity : ['', Validators.required ],
      Rent : ['', Validators.required ],
      });
    }

    updatecar(Vehicle_number,Model_name, Seating_capacity, Rent) {
      this.route.params.subscribe(params => {
         this.bs.updatecar(Vehicle_number,Model_name, Seating_capacity, Rent, params['id']);
         this.router.navigate(['car']);
   });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editcar(params['id']).subscribe(res => {
          this.business = res;
          console.log(this.business);
      });
    });
  }

}
