import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {

  public titulo = "Formularios de Editorial";
  public nombre_editorial : String;
  public direccion : String;
  public telefono :String;
  public email_editorial : String;
  public web_editorial : String;

  constructor() { }

  ngOnInit() {
  }

}
