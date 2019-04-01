import { Component, OnInit } from '@angular/core';
import { ServiceInfoService } from '../services/serviceinfo-service';
import { ServiceInfo } from '../models/serviceinfo-model';
import 'rxjs/add/operator/map';
import { PurchaseInfo } from '../models/purchaseinfo-model';
import { formatDate } from '@angular/common';
import { PurchasesInfo } from '../models/purchasesinfo-model';


@Component({
  selector: 'app-profile-dashboard',
  template: `
  <app-internet 
      [serviceInfo]="serviceInfo"
      [purchases]="purchases"
      (submit)="handleSubmit($event)">
  </app-internet>
  `
})

export class ServiceDashboardComponent implements OnInit {
  public serviceInfo: ServiceInfo;
  public purchase: PurchaseInfo;
  public purchases: PurchasesInfo;

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private serviceInfoService: ServiceInfoService) {  }

  ngOnInit() {
    
    this.serviceInfoService.getServices()
      .subscribe((serviceInfo: ServiceInfo) => {
        console.log('SI: ' + JSON.stringify(serviceInfo));
        return this.serviceInfo = serviceInfo;
      });
      this.getCurrentPurchases();
  }
  getCurrentPurchases () {
    this.serviceInfoService.getPurchases(this.currentUser.id)
    .subscribe((purchases: PurchasesInfo) => {
      console.log('SIP: ' + JSON.stringify(purchases));
      return this.purchases = purchases;
    });
  }

  handleSubmit(event: ServiceInfo) {
    
    const now = new Date();
    const ptime =  formatDate(now, 'yyyy-MM-dd hh:mm:ss', 'en-US', '+0000');
    
    const purchaseInfo = {
      ServiceID : event.ServiceID,
      ServicePrice : event.ServicePrice,
      id : this.currentUser.id,
      PurchaseTime : ptime
    };

    console.log('SI2 Selected: ' + JSON.stringify(purchaseInfo));

    this.serviceInfoService
      .createPurchase(purchaseInfo)
      .subscribe((data: ServiceInfo) => {
        this.purchase = Object.assign({}, this.purchase, purchaseInfo);
          this.getCurrentPurchases();
          return this.purchase;
        });   
  }
}
