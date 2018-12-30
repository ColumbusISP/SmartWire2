import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { SecureHomeRoutingModule } from './secure-home-routing.module';
import { SecureHomeComponent } from './secure-home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../services/customer/profile';
import { PageHeaderComponent } from './shared/modules/page-header/page-header.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SecureHomeRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        HttpModule
    ],
    declarations: [
        SecureHomeComponent, 
        SidebarComponent, 
        HeaderComponent, 
        PageHeaderComponent,
        ProfileComponent],
    providers: [
        ProfileService
    ]
})
export class LayoutModule {}
