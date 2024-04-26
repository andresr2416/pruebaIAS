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

    this.deliveryForm.get('depname')!.valueChanges.subscribe(() => {
      this.getCities();
    });
  }

  getDepartment() {
    this.citiesService.getDepartment().subscribe((res: citiesResponse[]) => {
      this.departmentList = res;
    });
  }

  getCities() {
    // Obtener el valor actual del campo depname
    const departmentId = this.deliveryForm.get('depname')!.value;
    // Llamar al servicio para obtener las ciudades basadas en el departamento seleccionado
    this.citiesService.getCities(departmentId).subscribe((res: citiesResponse[]) => {
      this.citiesList = res;
    });
  }


  onSubmit() {
    console.log('...');
  }
}
