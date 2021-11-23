import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  title:string = "Pipe Demo Application";

  today = new Date();

  jsonval = {
              empname: "john",
              designation: "developer",
              technologies: {tech1:"java", tech2:"Angular"}

            }
          
  names = ["john","smith","jack","raka","baka"]

  constructor() { }

  ngOnInit(): void {
  }

}
