import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AccessToken } from '../app/interfaces/access-token';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

/**
 * @author Matías Hermosilla
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    public constructor(
        private authService: AuthService
    ) {

    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // ¿Se ha enviado la petición al backend?
        if (request.url.startsWith(environment.host)) {
            // Ruta
            const route: string = request.url.substring(environment.host.length);

            // ¿Es la ruta de OAuth2?
            if (route.substr(0, 12) === '/oauth/token') {
                // Autorización
                const authorization: string = 'Basic ' + window.btoa(environment.client_id + ':' + environment.client_secret);

                // Cabeceras
                const headers: HttpHeaders = request.headers.set('Authorization', authorization);

                // Copiar petición
                const newRequest: HttpRequest<any> = request.clone({
                    headers
                });

                return next.handle(newRequest);
            } else if (this.authService.tokenEsValido()) {
                // Obtener token
                console.log('El token es valido');
                const token: AccessToken | undefined = this.authService.getToken();

                // Si hay un token
                if (token != null) {
                    // Cabeceras
                    const headers: HttpHeaders = request.headers.set('Authorization', token.token_type + ' ' + token.access_token);

                    // Copiar petición
                    const newRequest: HttpRequest<any> = request.clone({
                        headers
                    });

                    return next.handle(newRequest);
                }
            }
        }

        return next.handle(request);
    }

}
