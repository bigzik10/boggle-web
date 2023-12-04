import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistorHeaderComponent } from './vistor-header/vistor-header.component';
import { UsersHeaderComponent } from './users-header/users-header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HostPageComponent } from './host-page/host-page.component';
import { BecomeHostPageComponent } from './become-host-page/become-host-page.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionService } from './accordion/accordion.service';

@NgModule({
  declarations: [
    AppComponent,
    VistorHeaderComponent,
    UsersHeaderComponent,
    LoginComponent,
    SignupComponent,
    ErrorPageComponent,
    HomepageComponent,
    FooterComponent,
    ForgotPasswordComponent,
    HostPageComponent,
    BecomeHostPageComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AccordionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
