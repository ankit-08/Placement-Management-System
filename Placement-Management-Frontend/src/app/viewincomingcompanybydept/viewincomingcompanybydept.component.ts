import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Incomingcompany}from '../_models/incomingcompany'
import {StudentserviceService} from '../_services/studentservice.service'

@Component({
  selector: 'app-viewincomingcompanybydept',
  templateUrl: './viewincomingcompanybydept.component.html',
  styleUrls: ['./viewincomingcompanybydept.component.css']
})
export class ViewIncomingcompanybydeptComponent implements OnInit {
  Showmsg:string=""
  showtable=false

  incomingcompanyarr: Incomingcompany[];
  constructor() { }

  ngOnInit(): void {
  }

}
