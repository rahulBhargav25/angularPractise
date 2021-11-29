import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {



  registerUser(registerForm : any) {
    alert(registerForm.form.value.uname)
    alert(registerForm.form.value.contact)
    alert(registerForm.form.value.email)
    alert("register user method invoked");
  }


  constructor() { }

  ngOnInit(): void {
  }

}
