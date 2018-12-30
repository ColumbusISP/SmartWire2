import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Profile } from '../../models/profile';
import { environment } from '../../../environments/environment';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ProfileService {
    private vurl = API_URL + '/api/customer';
    constructor( private http: HttpClient) { 

    }

getCustomer(id: number): Observable<Profile> {
  const url = this.vurl + '/' + id;
  return this.http
    .get(url)
    .map((returnObj: Profile) => returnObj )
    .catch((error: any) => Observable.throw((error)));
    }

  updateCustomer (customer: Profile): Observable<any> {
    return this.http
    .put(this.vurl, customer);
  }
}
