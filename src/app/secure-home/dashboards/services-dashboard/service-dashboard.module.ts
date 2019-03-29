import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDashboardComponent } from './containers/service-dashboard.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from '../../../sharedmodule/shared-component.module';
import { RegistrationService } from '../../services/registrationServices';
import { ServiceInfoService } from './services/serviceinfo-service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule
        
    ],
    declarations: [
        ServiceDashboardComponent  
    ],
    providers: [
        RegistrationService,
        ServiceInfoService
    ],
    exports: [
        ServiceDashboardComponent
    ]
})
export class ServiceDashboardModule {}
