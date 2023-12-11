import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../signup/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signInData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  async signIn() {
    const { email, password } = this.signInData;
    try {
      if (await this.authService.signIn(email, password)) {
        this.router.navigate(['/post-list']);
      } else {
        // Handle failed authentication
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      // Handle the error as needed
    }
  }
}
