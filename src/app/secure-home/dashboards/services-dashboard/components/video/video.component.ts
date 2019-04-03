import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PurchasesInfo } from '../../models/purchasesinfo-model';
import { ServiceInfo } from '../../models/serviceinfo-model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
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
