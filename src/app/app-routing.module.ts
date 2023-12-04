import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BecomeHostPageComponent } from './become-host-page/become-host-page.component'

const routes: Routes = [
  { path: '', component: HomepageComponent, title: 'Home | Boggle'},
  { path: 'login', component: LoginComponent, title: 'Login | Boggle'},
  { path: 'signup', component: SignupComponent, title: 'SignUp | Boggle'},
  { path: '404', component: ErrorPageComponent, title: '404 Page Not Found | Boggle'},
  { path: 'hompage', component: HomepageComponent, title: 'Home | Boggle'},
  { path: 'forgot-password', component: ForgotPasswordComponent, title: 'ForgotPassword | Boggle'},
  { path: 'become-host', component: BecomeHostPageComponent, title: 'Become-a-Host | Boggle'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
