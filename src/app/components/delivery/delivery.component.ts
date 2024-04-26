import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { citiesResponse } from 'src/app/interfaces/citiesInterface';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit {
  deliveryForm!: FormGroup;
  departmentList!: citiesResponse[];
  citiesList!: citiesResponse[];


  constructor(
    private formBuilder: FormBuilder,
    private readonly citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    this.getDepartment();
    this.departmentList;
    this.citiesList;
    this.deliveryForm = this.formBuilder.group({
      depname: ['', Validators.required],
      cityname: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  getDepartment() {
    this.citiesService.getDepartment().subscribe((res: citiesResponse[]) => {
      this.departmentList = res;
    });
  }

  getCities(){
    this.citiesService.getCities(this.deliveryForm.value).subscribe((res: citiesResponse[]) => {
      console.log(res);
      
      this.citiesList = res
    })
  }


  onSubmit() {
    console.log('...');
  }
}
