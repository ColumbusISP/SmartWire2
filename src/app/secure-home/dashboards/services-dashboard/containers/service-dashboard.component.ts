import { Component, OnInit, Input } from '@angular/core';
import { ServiceInfoService } from '../services/serviceinfo-service';
import { ServiceInfo } from '../models/serviceinfo-model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile-dashboard',
  template: `
  <h3>Services</h3>
  <div class="table-responsive">
  <table class="table table-striped table-bordered table-hover table-condensed">
      <tr  *ngFor="let item of serviceInfo; let i = index">
        <td>{{ item?.ServiceCategoryName }} </td>
        <td>{{ item?.ServiceName }}  </td>
        <td>{{ item?.ServicePrice }}  </td>
        <td>{{ item?.ServiceDescription }} </td>
      </tr>
  </table>
</div>
    
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
        console.log('CI: ' + JSON.stringify(serviceInfo));
        return this.serviceInfo = serviceInfo;
      });
  }
  

//   handleSubmit(event: ServiceInfo) {
    
//     this.contactInfoService
//       .updateService(event)
//       .subscribe((data: ServiceInfo) => {
//         this.contactInfo = Object.assign({}, this.contactInfo, event);
//           return this.contactInfo;
//         });
      
  // }

  
}
