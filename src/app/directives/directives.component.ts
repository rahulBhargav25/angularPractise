import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {


  message:string = "This is message from directive component";
  flag:boolean = false;

  months = ["jan","feb","mar","apr","may"]; 
  numbers = [2,3,53,54,4,2,43,5,56,2,32,23,4,556,4,2,1,131,4,41];
  constructor() { }

  ngOnInit(): void {
  }

}
