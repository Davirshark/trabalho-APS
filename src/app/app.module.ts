import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_PT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './tela-login/tela-login.component';
import { CadastroComponent } from './tela-cadastro/tela-cadastro.component';

import { ReactiveFormsModule } from '@angular/forms';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button'

import { NgxCaptchaModule } from 'ngx-captcha';
import { AutoFocusDirective } from './directives/auto-focus.directive';


registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    NzCardModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzImageModule,
    NzDatePickerModule,
    NgxCaptchaModule,
    NzCheckboxModule,
    NzButtonModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_PT }],
  bootstrap: [AppComponent]
})
export class AppModule { }
