import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/car';

  constructor(private http: HttpClient) { }

  addcar(vehicle_number, model_name, Seating_capacity,rent,booked) {
    const obj = {
      vehicle_number: vehicle_number,
      model_name: model_name,
      seating_capacity: Seating_capacity,
      rent: rent,
      booked: booked
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => alert('Congratulations, Your new Car is Added'));
  }

  getcars() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editcar(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    updatecar(vehicle_number,model_name, Seating_capacity, rent, id) {

      const obj = {
        vehicle_number: vehicle_number,
        model_name: model_name,
        seating_capacity: Seating_capacity,
        rent: rent
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
    
    deletecar(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }

    bookcar(id){
      console.log("helo");
      return this.http.get(`${this.uri}/booked/${id}`);
    }
}