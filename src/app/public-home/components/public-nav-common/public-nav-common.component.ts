import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-nav-common',
  templateUrl: './public-nav-common.component.html',
  styleUrls: ['./public-nav-common.component.scss']
})
export class PublicNavCommonComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;
  constructor() { }

// To Do: Use parent input / outputs for nav data and functions

  ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
  }
  onLoggedout() {
    localStorage.removeItem('isLoggedin');
}
}
