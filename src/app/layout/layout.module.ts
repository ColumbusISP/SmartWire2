import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../services/customer/profile';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        HttpModule
    ],
    declarations: [
        LayoutComponent, 
        SidebarComponent, 
        HeaderComponent, 
        ProfileComponent],
    providers: [
        ProfileService
    ]
})
export class LayoutModule {}
