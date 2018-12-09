import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { PublicLayoutRoutingModule } from './public-layout-routing.module';
import { PublicLayoutComponent } from './public-layout.component';
import { PublicSidebarComponent } from './components/public-sidebar/public-sidebar.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';

@NgModule({
    imports: [
        CommonModule,
        PublicLayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [PublicLayoutComponent, PublicSidebarComponent, PublicHeaderComponent]
})
export class PublicLayoutModule {}
