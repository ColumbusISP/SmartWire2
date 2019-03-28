import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ServiceInfo } from '../models/serviceinfo-model';
import { environment } from '../../../../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ServiceInfoService {
    private vurl = API_URL + '/api/consumerServices';
    constructor( private http: HttpClient) { 

    }

// getCustomer(id: number): Observable<ServiceInfo> {
getServices(): Observable<ServiceInfo> {
        //   const url = this.vurl + '/' + id;
  const url = this.vurl;
  return this.http
    .get(url)
    .map((returnObj: ServiceInfo) => returnObj )
    .catch((error: any) => Observable.throw((error)));
    }

//   updateCustomer (customer: ContactInfo): Observable<any> {
//     return this.http
//     .put(this.vurl, customer);
//   }
}
