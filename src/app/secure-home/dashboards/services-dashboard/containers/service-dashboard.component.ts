import { Component, OnInit } from '@angular/core';
import { ServiceInfoService } from '../services/serviceinfo-service';
import { ServiceInfo } from '../models/serviceinfo-model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile-dashboard',
  template: `
  <app-internet 
      [serviceInfo]="serviceInfo"
      (submit)="handleSubmit($event)">
  </app-internet>
  `
})

export class ServiceDashboardComponent implements OnInit {
  public serviceInfo: ServiceInfo;
  submitted = false;
  message: string;
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private serviceInfoService: ServiceInfoService) { }  
  ngOnInit() {
    
    this.serviceInfoService.getServices()
      .subscribe((serviceInfo: ServiceInfo) => {
        // console.log('SI: ' + JSON.stringify(serviceInfo));
        return this.serviceInfo = serviceInfo;
      });
  }
  handleSubmit(event: ServiceInfo) {
    console.log('SI2 Selected: ' + JSON.stringify(event));
//     this.contactInfoService
//       .updateService(event)
//       .subscribe((data: ServiceInfo) => {
//         this.contactInfo = Object.assign({}, this.contactInfo, event);
//           return this.contactInfo;
//         });   
  }
}
