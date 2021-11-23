import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventhandling',
  templateUrl: './eventhandling.component.html',
  styleUrls: ['./eventhandling.component.css']
})
export class EventhandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displaymsg() {
    alert("it works");
  }

}
