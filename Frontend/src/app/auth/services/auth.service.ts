import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { environment } from '../../enviroments/enviroment';
import { AuthResponse } from '../interfaces/auth-responser.interface';
import { catchError, firstValueFrom, map, Observable, of, tap, throwError } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
const baseUrl = environment.baseUrl;

//root significa que la instancia se crea al inicio de la aplicacion
@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authStatus = signal('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(localStorage.getItem('token'));

  checkStatusResource = rxResource({
    stream: () => this.checkStatus(),
  });

  private http = inject(HttpClient);

  authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() === 'checking') return 'checking';

    if (this._user()) {
      return 'authenticated';
    }

    return 'not-authenticated';
  });

  user = computed(() => this._user());
  token = computed(this._token);

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<AuthResponse>(`${baseUrl}/auth/login`, { email, password }).pipe(
      map((resp) => this.handleAuthSuccess(resp)),
      catchError((error: any) => this.handleAuthError(error))
    );
  }

  register(email: string, password: string, confirm: string): Observable<boolean> {
    return this.http
      .post<AuthResponse>(`${baseUrl}/auth/register`, {
        email,
        password,
        confirm,
      })
      .pipe(
        map((resp) => this.handleAuthSuccess(resp)),
        catchError((error: any) => this.handleAuthError(error))
      );
  }

  //Cola donde entra un valor y sale otro valor
  // Promise es un valor q eventualmente va a estar ahi

  checkStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return of(false);
    }

    return this.http
      .get<AuthResponse>(`${baseUrl}/auth/check-status`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .pipe(
        map((resp) => this.handleAuthSuccess(resp)),
        catchError((error: any) => this.handleAuthError(error))
      );
  }

  logout() {
    this._user.set(null);
    this._token.set(null);
    this._authStatus.set('not-authenticated');
    localStorage.removeItem('token');
  }

  private handleAuthSuccess({ token, user }: AuthResponse) {
    this._user.set(user);
    this._authStatus.set('authenticated');
    this._token.set(token);

    localStorage.setItem('token', token);
    return true;
  }

  //Mapear para tener interceptor
  private handleAuthError(error: any) {
    this.logout();
    return throwError(() => error);
  }
}
