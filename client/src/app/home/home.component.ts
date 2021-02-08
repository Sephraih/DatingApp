import { HttpClient } from '@angular/common/http';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor() { }

  ngOnInit(): void {
  }
  registerToggle(){
    this.registerMode =!this.registerMode;
  }
  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

}
