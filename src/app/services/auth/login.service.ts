import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../helpers/http-error-handler.service';
import { User } from '../../secure-home/models/user';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const API_URL = environment.apiUrl;

@Injectable()
export class LoginService {
    private handleError: HandleError;
    vurl = API_URL + '/api/authenticate';
    public rtrnObject: any;
    
    
  constructor(
      private http: HttpClient,
      public jwtHelper: JwtHelperService,
      httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('LoginService');
    }

  loginUser(tmpUser: User) {
    return this.http.post<any>(this.vurl, tmpUser)
        .pipe(
          map(returnObj => {
            // login successful if there's a jwt token in the response
            const obj = JSON.parse(JSON.stringify(returnObj));
            console.log('Initial Return:' + JSON.stringify(tmpUser));
            const user = obj.payload;

            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                user.fulltoken = user.token;
                // user.token = user.fulltoken.split(' ');
                
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                // localStorage.setItem('token', JSON.stringify(user.token));
                console.log('User Logged in:' + JSON.stringify(user));
            } else {
              console.log('User Token Not available:' + JSON.stringify(user));
            }
            return returnObj;
        }),
          catchError(this.handleError('Login User', {'success': false, 'message': 'incorrect password'} ))
        );
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    
    
  }
  isAuthenticated(): boolean {
    
    const user = localStorage.getItem('currentUser');
    const obj = JSON.parse(user);
    if (obj != null) {
      if (!this.jwtHelper.isTokenExpired(obj.token)) {
        return true;
      } else {return false; }
    } else {return false; }
  }
  
}
