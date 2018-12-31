import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


import { Observable } from 'rxjs';
import { ContactInfo } from '../models/contactinfo';
import { environment } from '../../../../../environments/environment';
import { HttpErrorHandler, HandleError } from '../../../../services/helpers/http-error-handler.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ContactInfoService {
    private vurl = API_URL + '/api/customer';
    constructor( private http: HttpClient) { 

    }

getCustomer(id: number): Observable<ContactInfo> {
  const url = this.vurl + '/' + id;
  return this.http
    .get(url)
    .map((returnObj: ContactInfo) => returnObj )
    .catch((error: any) => Observable.throw((error)));
    }

  updateCustomer (customer: ContactInfo): Observable<any> {
    return this.http
    .put(this.vurl, customer);
  }
}
