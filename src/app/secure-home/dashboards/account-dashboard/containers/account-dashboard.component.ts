import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { formatDate } from '@angular/common';
import { UnitInfo } from '../models/unitInfo-model';
import { UnitInfoService } from '../services/unitInfo-service';


@Component({
  selector: 'app-account-dashboard',
  template: `
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
          <td><button class="btn btn-default" type="submit">Select</button></td>
            <td>{{ item?.BuildingAddress }}  </td>
            <td>{{ item?.BuildingUnitIdentifier }} </td>
          </tr>
    </table>
  </div>
  `
})

export class AccountDashboardComponent implements OnInit {
  public unitInfo: UnitInfo;

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private unitInfoService: UnitInfoService) {  }

  ngOnInit() {
    
    this.unitInfoService.getUnits()
      .subscribe((unitInfo: UnitInfo) => {
        console.log('AI: ' + JSON.stringify(unitInfo));
        return this.unitInfo = unitInfo;
      });
  
  }
}
