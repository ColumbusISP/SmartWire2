import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ConsumerContext } from 'src/app/models/consumerContext';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ConsumerContextService {
    private vurl = API_URL + '/api/consumerContext';
    constructor( private http: HttpClient) { 

    }

getConsumerContext(id: number): Observable<ConsumerContext> {
  const url = this.vurl + '/' + id;
  return this.http
    .get(url)
    .map((returnObj: ConsumerContext) => returnObj )
    .catch((error: any) => Observable.throw((error)));
    }
}
