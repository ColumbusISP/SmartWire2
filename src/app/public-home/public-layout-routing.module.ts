import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './public-layout.component';
import { PublicHomePageComponent } from './public-home-page/public-home-page.component';

const routes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: '', component: PublicHomePageComponent },
            { path: 'public-home', component: PublicHomePageComponent, pathMatch: 'prefix' }
            ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    
    exports: [RouterModule]
})
export class PublicLayoutRoutingModule {}
