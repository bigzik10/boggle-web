import { Component, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DrawerService } from '../drawer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup;
  @ViewChild('phoneInput') phoneInput!: ElementRef;

  @Output() toggleDrawer = new EventEmitter<boolean>();
  isOpen = false;

  password: string = '';
  hidePassword: boolean = true;

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  constructor(private fb: FormBuilder, private drawerService: DrawerService) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: ['male', Validators.required],
      dob: ['', Validators.required]
    });
  }

  onSubmit() {
    // Implement your form submission logic here
    console.log(this.signupForm.value);
  }

  toggle() {
    this.isOpen = !this.isOpen;
    console.log('Signup Toggle:', this.isOpen);
    this.toggleDrawer.emit(this.isOpen);
  }

  closeDrawer() {
    this.isOpen = false;
    console.log('Signup Close:', this.isOpen);
    this.toggleDrawer.emit(this.isOpen);
  }

  close() {
    this.isOpen = false;
    this.toggleDrawer.emit(this.isOpen);
  }
}
