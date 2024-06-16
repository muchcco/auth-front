import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const accessToken = localStorage.getItem('access_token');
      if (accessToken) {
        // El usuario tiene un token de acceso válido, permitir el acceso a la ruta
        return true;
      } else {
        // No hay token de acceso válido, redirigir al usuario a la página de login
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
    }
    return false; // Proteger en el servidor si es necesario
  }
}
