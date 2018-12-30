import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/customer/profile';
import { Profile } from '../../models/profile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile = new Profile();
  submitted = false;
  message: string;
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(protected http: HttpClient, 
    private profileService: ProfileService) { }  
  ngOnInit() {
    
    this.profileService.getCustomer(this.currentUser.id)
      .subscribe((profile: Profile) => this.profile = profile);
  }
  

  update(): void {
    this.submitted = true;
    console.log ('email: ' + this.profile.email);
    this.profileService.updateCustomer(this.profile)
        .subscribe(() => this.message = 'Customer Updated Successfully!');
  }
}
