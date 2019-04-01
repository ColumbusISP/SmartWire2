import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ServiceInfo} from '../../models/serviceinfo-model';
import { PurchasesInfo } from '../../models/purchasesinfo-model';


@Component({
  selector: 'app-service-common',
  templateUrl: './service-common.component.html',
  styleUrls: ['./service-common.component.scss']
})
export class ServiceCommonComponent implements OnInit {
  @Input() 
  serviceInfo: ServiceInfo;

  @Input()
  purchases: PurchasesInfo;

  @Input() 
  serviceCategory: String;
  
  @Output()
  submit: EventEmitter<ServiceInfo> = new EventEmitter<ServiceInfo>();
  
  submitted = false;
  message: string;
  
  constructor() { }

  ngOnInit() {
  }
  
  update(selectedServiceInfo: ServiceInfo): void {
    // console.log('Update Click: ' + JSON.stringify(selectedServiceInfo));
    this.submitted = true;
    this.message = 'Changes Submitted';
    this.submit.emit(selectedServiceInfo);
    
  }
}
