import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ServiceInfo } from '../../models/serviceinfo-model';
import { PurchasesInfo } from '../../models/purchasesinfo-model';

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.scss']
})
export class InternetComponent implements OnInit {

  @Input() 
  serviceInfo: ServiceInfo;

  @Input()
  purchases: PurchasesInfo;

  @Output()
  submit: EventEmitter<ServiceInfo> = new EventEmitter<ServiceInfo>();

  constructor() { }

  ngOnInit() {
  }

  relaySubmit(event: ServiceInfo) {
    // console.log('SI1 Selected: ' + JSON.stringify(event));
    this.submit.emit(event);
  }
}
