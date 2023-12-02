import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  currentScreen = 1;
  email: string = '';
  otp: string[] = ['', '', '', '', ''];
  newPassword: string = '';
  confirmPassword: string = '';



  sendOtp() {
    // Implement logic to send OTP to the entered email
    // For simplicity, let's move to the next screen directly
    this.currentScreen++;
  }

  verifyOtp() {
    // Implement logic to verify the entered OTP
    // If OTP is verified, move to the next screen
    this.currentScreen++;
  }

  resetPassword() {
    // Implement logic to reset the password
    // If the password is successfully reset, move to the next screen
    this.currentScreen++;
  }

  prevScreen() {
    this.currentScreen--;
  }

  constructor(private router: Router) {}

  navigateToLogin() {
    // Implement navigation to the login page
    this.router.navigate(['/login']);
  }

}
