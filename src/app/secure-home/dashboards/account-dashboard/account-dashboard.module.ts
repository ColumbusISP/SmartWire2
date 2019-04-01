import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from '../../../sharedmodule/shared-component.module';
import { RegistrationService } from '../../services/registrationServices';
import { AccountDashboardComponent } from './containers/account-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule
        
    ],
    declarations: [
        AccountDashboardComponent
    ],
    providers: [
        RegistrationService
    ],
    exports: [
        
    ]
})
export class ActivityDashboardModule {}
