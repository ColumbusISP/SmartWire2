import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { PublicLayoutRoutingModule } from './public-layout-routing.module';
import { PublicLayoutComponent } from './public-layout.component';
import { PublicSidebarComponent } from './components/public-sidebar/public-sidebar.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PublicNavCommonComponent } from './components/public-nav-common/public-nav-common.component';
import { PublicHomePageComponent } from './public-home-page/public-home-page.component';

@NgModule({
    imports: [
        CommonModule,
        PublicLayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [PublicLayoutComponent, PublicSidebarComponent, PublicHeaderComponent, PublicNavCommonComponent, PublicHomePageComponent]
})
export class PublicLayoutModule {}
