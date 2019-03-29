import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './components/contact-info/contactinfo.component';
import { ProfileDashboardComponent } from './containers/profile-dashboard.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from '../../../sharedmodule/shared-component.module';
import { RegistrationService } from '../../services/registrationServices';
import { ContactInfoService } from './services/contactinfo-service';


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
        RegistrationService,
        ContactInfoService
    ],
    exports: [
        ProfileDashboardComponent
    ]
})
export class ProfileDashboardModule {}
