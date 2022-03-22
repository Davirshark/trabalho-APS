import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class LoginComponent implements OnInit {
  cachorrinho: '/assets/cachorrinho-idel.jpg'
  form: FormGroup
  constructor() {
    this.form = this.initForm();
   }
  
   initForm() {
    return new FormGroup({ 
      id: new FormControl(''),
      nick: new FormControl('', [Validators.maxLength(50), Validators.required]),
      password: new FormControl('', [Validators.maxLength(50), Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.value)
    this.form.reset()
  }

}
