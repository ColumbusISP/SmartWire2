import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';


import { SecureHomeRoutingModule } from './secure-home-routing.module';
import { SecureHomeComponent } from './secure-home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ConsumerContextService } from '../secure-home/services/consumerContext';

// Dashbaords
import { ProfileDashboardModule } from './dashboards/profile-dashboard/profile-dashboard.module';
import { MainDashboardModule } from './dashboards/main-dashboard/main-dashboard.module';
import { ServiceDashboardModule } from './dashboards/services-dashboard/service-dashboard.module';
import { PrivateNavCommonComponent } from './components/private-nav-common/private-nav-common.component';
import { ActivityDashboardModule } from './dashboards/account-dashboard/account-dashboard.module';


@NgModule({
    imports: [
        CommonModule,
        SecureHomeRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        HttpModule,
        ProfileDashboardModule,
        ServiceDashboardModule,
        MainDashboardModule,
        ActivityDashboardModule

    ],
    declarations: [
        SecureHomeComponent, 
        SidebarComponent, 
        HeaderComponent, PrivateNavCommonComponent
    ],
    providers: [
        
        ConsumerContextService

    ],
    exports: [
         
    ]
})
export class SecureHomeModule {}
