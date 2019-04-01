import { Component, OnInit, Input } from '@angular/core';
import { ConsumerContext } from '../../models/consumerContext';
import { ContactInfo } from '../../dashboards/profile-dashboard/models/contactinfo-model';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-private-nav-common',
  templateUrl: './private-nav-common.component.html',
  styleUrls: ['./private-nav-common.component.scss']
})
export class PrivateNavCommonComponent implements OnInit {
  @Input()
  consumerContext: ConsumerContext;
  
  @Input()
  profile: ContactInfo;
  
  public pushRightClass: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  onLoggedout() {
    this.loginService.logout();
}

}
