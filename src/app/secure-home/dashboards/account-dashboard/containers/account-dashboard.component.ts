import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { formatDate } from '@angular/common';
import { UnitInfo } from '../models/unitInfo-model';
import { UnitInfoService } from '../services/unitInfo-service';


@Component({
  selector: 'app-account-dashboard',
  template: `
  <app-page-header heading="Account - Select Building Unit"></app-page-header>
    <div class="content-main">
  <select (change)="selectItem($event.target.value)" [(ngModel)]="selectedAddress" name="addrSelect" id="addrSelect" >
    <option>Select Address</option>
    <option *ngFor="let item of buildingList; let i = index" value="{{item}}">
      {{item}}
    </option>
  </select>
  </div>
  <form #facilityForm="ngForm" novalidate>
  <div class="table-responsive">
    <table class="table table-striped table-bordered table-hover table-sm" >
        <thead class = thead-dark>
            <tr>
              <th style="width: 10%">Select</th>
              <th style="width: 20%">Address</th>
              <th style="width: 10%">Unit</th>
            </tr>
        </thead>
        <tr  *ngFor="let item of unitInfo; let i = index">
          <ng-container *ngIf="item?.BuildingAddress==selectedAddress">
          <td><button class="btn btn-default" (click)="setBuildingIDSubmit(item)" type="submit">Select</button></td>
            <td>{{ item?.BuildingAddress }}  </td>
            <td>{{ item?.BuildingUnitIdentifier }} </td>
            </ng-container>
            </tr>
    </table>
  </div>
  <h3>
  <p class="text-center">{{ selectedMessage }}</p>
  </h3>
  </form>
  `
})

export class AccountDashboardComponent implements OnInit {
  public unitInfo: UnitInfo[];
  public buildingList: string[] = [];
  public selectedAddress: string;
  public selectedMessage: string;
  
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private unitInfoService: UnitInfoService) {  }

  ngOnInit() {
    this.selectedMessage = '';
    this.selectedAddress = 'Select Address';
    this.unitInfoService.getUnits()
      .subscribe((unitInfo: UnitInfo[]) => {
        // console.log('AI: ' + JSON.stringify(unitInfo));
        this.getBuildings(unitInfo);
        return this.unitInfo = unitInfo;
      }); 
      
  }
  selectItem(event: string) {
    this.selectedAddress = event;
    this.selectedMessage = '';
    
  }
  getBuildings(unitInfo: UnitInfo[]) {
    for (let i = 0; i < unitInfo.length ; i++) {  
      if (this.buildingList.lastIndexOf(unitInfo[i].BuildingAddress) === -1) {
        this.buildingList.push(unitInfo[i].BuildingAddress);
      }
    }
  }

  setBuildingIDSubmit(event: UnitInfo) {
    // Create Set Unit  Object
    const setUnitObj = {
      BuildingUnitID : event.BuildingUnitID,
      id : this.currentUser.id
    };

    console.log('UI2 Selected: ' + JSON.stringify(setUnitObj));
    // Submit Purchase Object
    this.unitInfoService.setBuildingUnitID(setUnitObj)
      .subscribe((data: UnitInfo) => {
        console.log ('BU: ' + data);
        this.selectedMessage = 'Building Unit Selected!';
        this.selectedAddress = 'Select Address';
          
          
        }
    );   
  }
}
