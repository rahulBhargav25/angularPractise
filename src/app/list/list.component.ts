import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  emps:any[] = []
  constructor(private empserv : EmpserviceService) { }

  ngOnInit(): void {
    this.emps = this.empserv.getEmployees()
  }

}
