import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        errorMessage: string;


  constructor(private authService: AuthService, private router: Router) {
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.password = '';
        this.errorMessage = '';
        


  }



  async signUp() {
    const { email, password } = this;
    try {
      const success = await this.authService.signUp(email, password);
      if (success) {
        this.router.navigate(['/post-list']);
      } else {
        console.error('Registration failed. Please try again.');
        // You can also display an error message to the user
        // this.errorMessage = 'Registration failed. Please try again.';
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle the error as needed
    }
  }
  
  
}