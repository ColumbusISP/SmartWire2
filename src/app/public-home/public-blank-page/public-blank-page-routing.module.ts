import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicBlankPageComponent } from './public-blank-page.component';

const routes: Routes = [
    {
        path: '',
        component: PublicBlankPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicBlankPageRoutingModule {}
