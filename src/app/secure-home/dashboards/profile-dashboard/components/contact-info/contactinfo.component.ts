import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ContactInfo } from '../../models/contactinfo-model';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.scss']
})
export class ContactInfoComponent implements OnInit, OnChanges {
  @Input()
  contactInfo: ContactInfo;

  @Output()
  submit: EventEmitter<ContactInfo> = new EventEmitter<ContactInfo>();

  submitted = false;
  message: string;

  constructor() {}  
  
  ngOnInit() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.contactInfo = Object.assign({}, changes.contactInfo.currentValue);
    }
  }
  update(): void {
    console.log('Update Click: ' + JSON.stringify(this.contactInfo));
    this.submitted = true;
    this.message = 'Changes Submitted';
    this.submit.emit(this.contactInfo);
    
  }
}
