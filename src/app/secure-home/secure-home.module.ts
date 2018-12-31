import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { SecureHomeRoutingModule } from './secure-home-routing.module';
import { SecureHomeComponent } from './secure-home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from './shared/modules/page-header/page-header.component';
import { ConsumerContextService } from '../secure-home/services/consumerContext';

// Dashbaords
import { ProfileDashboardModule } from './dashboards/profile-dashboard/profile-dashboard.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SecureHomeRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        HttpModule,
        ProfileDashboardModule

    ],
    declarations: [
        SecureHomeComponent, 
        SidebarComponent, 
        HeaderComponent, 
        PageHeaderComponent
    ],
    providers: [
        
        ConsumerContextService
    ],
    exports: [
     
        PageHeaderComponent
    
    ]
})
export class SecureHomeModule {}
