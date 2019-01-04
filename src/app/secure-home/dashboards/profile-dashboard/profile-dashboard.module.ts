import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './components/contact-info/contactinfo.component';
import { ProfileDashboardComponent } from './containers/profile-dashboard.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/sharedmodule/shared-component.module';


// import { PageHeaderComponent } from '../../shared/modules/page-header/page-header.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule
        
    ],
    declarations: [
        ContactInfoComponent,
        ProfileDashboardComponent

    ],
    providers: [
        
    ],
    exports: [
        ProfileDashboardComponent
    ]
})
export class ProfileDashboardModule {}
