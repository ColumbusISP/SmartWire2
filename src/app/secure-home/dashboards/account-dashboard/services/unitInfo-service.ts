import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { UnitInfo } from '../models/unitInfo-model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class UnitInfoService {
    private vUnitUrl = API_URL + '/api/buildingUnitService';
    constructor( private http: HttpClient) { 

    }

// getCustomer(id: number): Observable<ServiceInfo> {
getUnits(): Observable<UnitInfo> {
  const url = this.vUnitUrl;
  return this.http
    .get(url)
    .map((returnObj: UnitInfo) => returnObj )
    .catch((error: any) => Observable.throw((error)));
    }
}
