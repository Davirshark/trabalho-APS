import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  siteKey: string
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };
  size: string;
  theme: string;
  isCheckedButton: true;
  usuarioCadastrar = {} as FormGroup

  constructor(private fb: FormBuilder) {
    this.siteKey = "6LeDKwEfAAAAAFALOQnsjZSuQUd-ghX9_E8oR2Zq"
    this.size = 'compact'
    this.theme = 'dark'
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      nick: ['', [Validators.required]],
      nascimento: ['', [Validators.required]],
      recaptcha: ['', Validators.required]
    });
  }

 
  acessar() {
    this.usuarioCadastrar = new FormGroup ({
      email: new FormControl (this.form.value.email),
      password: new FormControl (this.form.value.password) ,
      nick: new FormControl (this.form.value.nick),
      nascimento: new FormControl (this.form.value.nascimento),
    })
  
    console.log(this.form.value);
    console.log(this.usuarioCadastrar.value);
  }
}
