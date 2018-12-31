import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../helpers/http-error-handler.service';
import { User } from '../../secure-home/models/user';

const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class SignUpService {
    private handleError: HandleError;
    vurl = API_URL + '/api/signup';

    constructor(
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('SignupService');
      }
    /** POST: add a new user to the database */
  addUser (tmpUser: User) {
    return this.http.post<any>(this.vurl, tmpUser, httpOptions)
      .pipe( 
        catchError(this.handleError('Signup User', {'success': false, 'message': 'username already exists'} ))
      );
  }
}
