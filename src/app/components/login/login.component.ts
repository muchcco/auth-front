import { Component } from '@angular/core';
import { AuthService } from '../../_service/auth.service';
import { Profile } from '../../_models/profile.model';
import { UserService } from '../../_service/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any; // O el tipo de datos correcto para el usuario
  showProfileSelect: boolean = false; // Inicialmente no mostrar el select
  selectedProfileId: string | null = null;

  name: string = '';
  password: string = '';
  errorMessage: string = '';
  profiles: Profile[] = [];
  isLoading: boolean = false; // Propiedad para el estado de carga

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadProfiles();
  }

  login(): void {
    console.log(this.selectedProfileId);
    if (!this.selectedProfileId) {
      this.errorMessage = 'Seleccione un perfil antes de continuar.';
      return;
    }

    this.isLoading = true; // Iniciar el estado de carga

    this.authService.login(this.name, this.password, this.selectedProfileId).subscribe(
      response => {
        this.isLoading = false; // Detener el estado de carga
        console.log(response);
        
       if (response.status) {
         localStorage.setItem('access_token', response.data.access_token);
         if(this.selectedProfileId == '2'){
           this.router.navigate(['/reports']);
         }
       } else {
         this.errorMessage = response.message;
       }
      },
      error => {
        this.isLoading = false;
        this.errorMessage = error.error.message || 'Error inesperado en el inicio de sesión.';
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }

  logout(): void {
    this.authService.logout().subscribe(
      response => {
        console.log(response);
        // Limpiar cualquier dato adicional de la sesión si es necesario
        this.router.navigate(['/login']); // Redirigir a la página de login
      },
      error => {
        console.error('Error en el logout:', error);
        // Independientemente del error, intentar redirigir al usuario a la página de login
        this.router.navigate(['/login']);
      }
    );
  }

  loadProfiles(): void {
    if (this.name) {
      this.authService.getProfiles(this.name).subscribe(
        response => {
          this.profiles = response.data.profiles;
          this.showProfileSelect = true;
          this.errorMessage = '';
        },
        error => {
          this.errorMessage = error.error.message;
          this.showProfileSelect = false;
          console.log(error);
        }
      );
    }
  }

  onNameChange(): void {
    this.errorMessage = '';
    this.profiles = [];
    this.selectedProfileId = null;
    this.loadProfiles();
  }
}
