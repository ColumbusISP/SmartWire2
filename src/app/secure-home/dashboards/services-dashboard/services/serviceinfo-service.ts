import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ServiceInfo } from '../models/serviceinfo-model';
import { environment } from '../../../../../environments/environment';
import { PurchaseInfo } from '../models/purchaseinfo-model';
import { PurchasesInfo } from '../models/purchasesinfo-model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ServiceInfoService {
    private vServicesUrl = API_URL + '/api/consumerServices';
    private vPurchaseUrl = API_URL + '/api/consumerPurchase';
    private vPurchasesUrl = API_URL + '/api/consumerPurchases';
    constructor( private http: HttpClient) { 
    }

// getCustomer(id: number): Observable<ServiceInfo> {
getServices(): Observable<ServiceInfo> {
  const url = this.vServicesUrl;
  return this.http
    .get(url)
    .map((returnObj: ServiceInfo) => returnObj )
    .catch((error: any) => Observable.throw((error)));
    }

createPurchase (purchase: PurchaseInfo): Observable<any> {
    return this.http
    .put(this.vPurchaseUrl, purchase);
  }


getPurchases(id: number): Observable<PurchasesInfo> {
  const url = this.vPurchasesUrl + '/' + id;
  return this.http
    .get(url)
    .map((returnObj: PurchasesInfo) => returnObj )
    .catch((error: any) => Observable.throw((error)));
  }
}
