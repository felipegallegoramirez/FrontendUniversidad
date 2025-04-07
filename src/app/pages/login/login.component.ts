import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin = true;
  email = '';
  password = '';
  confirmPassword = '';
  remember = false;

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  onSubmit() {
    if (this.isLogin) {
      console.log('Login:', this.email, this.password);
    } else {
      if (this.password === this.confirmPassword) {
        console.log('Register:', this.email, this.password);
      } else {
        console.error('Las contraseñas no coinciden');
      }
    }
  }

  loginWithGoogle() {
    console.log('Google login');
  }

  loginWithApple() {
    console.log('Apple login');
  }
}
