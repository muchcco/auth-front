import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  password: string = '';
  errorMessage: string = '';
  userProfile: any = null;

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('YOUR_BACKEND_LOGIN_URL', {
      name: this.name,
      password: this.password
    }).subscribe(
      (response: any) => {
        if (response.status) {
          this.userProfile = response.data.user.profile;
        } else {
          this.errorMessage = response.message;
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred';
      }
    );
  }
}
