import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public constructor(
    private authService: AuthService,
    private router: Router
) {

}

public canActivate(): boolean {
    if (!this.authService.tokenEsValido()) {
        // Navegar a login
        this.router.navigate(['/']);

        // Retornar falso
        return false;
    }

    // Retornar verdadero
    return true;
}

}
