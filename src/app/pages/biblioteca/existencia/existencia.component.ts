import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.scss']
})
export class ExistenciaComponent implements OnInit {


  public existenciaForm : FormGroup;

  constructor(protected fb:FormBuilder) { }

  ngOnInit() {
  }

}
