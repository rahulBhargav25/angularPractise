import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  loginForm :FormGroup = new FormGroup({
    uname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    password : new FormControl('', [Validators.required,Validators.maxLength(15),Validators.pattern('[a-zA-Z]*')])
    
  
  })

  get frm() {
    return this.loginForm.controls
  }
  constructor() { }

  ngOnInit(): void {

  }

}
