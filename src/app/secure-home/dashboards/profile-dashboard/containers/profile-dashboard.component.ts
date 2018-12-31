import { Component, OnInit, Input } from '@angular/core';
import { ContactInfoService } from '../services/contactinfo';
import { ContactInfo } from '../models/contactinfo';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile-dashboard',
  template: `
    <app-contactinfo 
      [contactInfo]="contactInfo"
      (submit)="handleSubmit($event)">
    </app-contactinfo>
  `
})
export class ProfileDashboardComponent implements OnInit {
  public contactInfo: ContactInfo;
  submitted = false;
  message: string;
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private contactInfoService: ContactInfoService) { }  
  ngOnInit() {
    
    this.contactInfoService.getCustomer(this.currentUser.id)
      .subscribe((contactInfo: ContactInfo) => {
        console.log('CI: ' + JSON.stringify(contactInfo));
        return this.contactInfo = contactInfo;
      });
  }
  

  handleSubmit(event: ContactInfo) {
    
    this.contactInfoService
      .updateCustomer(event)
      .subscribe((data: ContactInfo) => {
        this.contactInfo = Object.assign({}, this.contactInfo, event);
          return this.contactInfo;
        });
      
  }

  
}
