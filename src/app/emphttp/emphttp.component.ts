import { Component, OnInit } from '@angular/core';
import { EmphttpService } from '../emphttp.service';

@Component({
  selector: 'app-emphttp',
  templateUrl: './emphttp.component.html',
  styleUrls: ['./emphttp.component.css']
})
export class EmphttpComponent implements OnInit {
  emps :any[] = []
  constructor(private empserv : EmphttpService) { }

  ngOnInit(): void {
    this.empserv.getEmployees().subscribe(data=>this.emps=data)
  }

}
