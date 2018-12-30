import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicBlankPageRoutingModule } from './public-blank-page-routing.module';
import { PublicBlankPageComponent } from './public-blank-page.component';

@NgModule({
    imports: [CommonModule, PublicBlankPageRoutingModule],
    declarations: [PublicBlankPageComponent]
})
export class PublicBlankPageModule {}
