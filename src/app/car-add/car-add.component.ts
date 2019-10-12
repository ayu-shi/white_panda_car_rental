import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Vehicle_number : ['', Validators.required ],
      Model_name : ['', Validators.required ],
      Seating_capacity : ['', Validators.required ],
      Rent : ['', Validators.required ],
      booked:['']
    });
  }

  addcar(vehicle_number, model_name, Seating_capacity,rent,booked) {
    this.bs.addcar(vehicle_number,model_name,Seating_capacity,rent,booked);
    this.angForm.reset();
  }

  ngOnInit() {
  }

}
