import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getISOWeek } from 'date-fns';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  form: FormGroup
  date = null;
  constructor() {
    this.form = this.initForm();
   }
  
   initForm() {
    return new FormGroup({ 
      id: new FormControl(''),
      nome: new FormControl(''),
      nick: new FormControl('', [Validators.maxLength(50), Validators.required]),
      email: new FormControl(''), 
      password: new FormControl('', [Validators.maxLength(50), Validators.required]),
      idade: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onChange(result: Event): void {
    
  }

  submit(){
    console.log(this.form.value)
    this.form.reset()
  }
}
