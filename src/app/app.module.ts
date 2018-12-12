import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormsComponent,
    FooterComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        // {
        //   path:'login',
        //   component:LoginFormsComponent,
        // },
        {
          path:'Registration',
          component:RegistrationFormComponent,
        }

      ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
