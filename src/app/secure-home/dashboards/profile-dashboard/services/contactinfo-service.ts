import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ContactInfo } from '../models/contactinfo-model';
import { environment } from '../../../../../environments/environment';

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
