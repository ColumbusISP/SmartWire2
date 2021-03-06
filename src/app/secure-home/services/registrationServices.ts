import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FacilityInfo } from '../models/facilityInfo';
import { UnitInfo } from '../models/unitInfo';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class RegistrationService {
    private vCCurl = API_URL + '/api/consumerContext';
    private vFIurl = API_URL + '/api/facilityInfo';
    private vUIurl = API_URL + '/api/unitInfo';
    
    constructor( private http: HttpClient) { 
    }

getFacilities(): Observable<FacilityInfo[]> {
  const url = this.vFIurl;
  return this.http
    .get(url)
    .map((returnObj: FacilityInfo[]) => returnObj )
    .catch((error: any) => Observable.throw((error)));
    }


getUnits(): Observable<UnitInfo[]> {
  const url = this.vUIurl;
  return this.http
    .get(url)
    .map((returnObj: UnitInfo[]) => returnObj )
    .catch((error: any) => Observable.throw((error)));
    }


SetUnit(unit: UnitInfo) {

  }

}
