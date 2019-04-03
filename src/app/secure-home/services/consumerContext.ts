import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ConsumerContext } from '../models/consumerContext';
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
export class ConsumerContextService {
    private vCCurl = API_URL + '/api/consumerContext';
    private vFIurl = API_URL + '/api/facilityInfo';
    private vUIurl = API_URL + '/api/unitInfo';
    
    constructor( private http: HttpClient) {     }

getConsumerContext(id: number): Observable<ConsumerContext[]> {
  const url = this.vCCurl + '/' + id;
  return this.http
    .get(url)
    .map((returnObj: ConsumerContext[]) => returnObj )
    .catch((error: any) => Observable.throw((error)));
    }

}
