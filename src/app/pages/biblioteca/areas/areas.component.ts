import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  public titulo = "Formularios de Areas";
  public areasForm : FormGroup;
 
  constructor(protected fb:FormBuilder){


  }

 


  ngOnInit() {
  }

  createForm(){

    this.areasForm=this.fb.group({

    areas_desarrollo: ' ',
    areas_mantenimiento: ' ',
    areas_infraestructura: ' ',


    });
  }

}
