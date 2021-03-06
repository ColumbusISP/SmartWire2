import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureHomeComponent } from './secure-home.component';

// must move this to new routing module in profile dashboard
import { ProfileDashboardComponent } from './dashboards/profile-dashboard/containers/profile-dashboard.component';
import { ServiceDashboardComponent } from './dashboards/services-dashboard/containers/service-dashboard.component';
import { AccountDashboardComponent } from './dashboards/account-dashboard/containers/account-dashboard.component';
import { PrivateHomePageComponent } from './private-home-page/private-home-page.component';

const routes: Routes = [
    {
        path: '',
        component: SecureHomeComponent,
        children: [
            { path: 'profile', component: ProfileDashboardComponent, pathMatch: 'prefix' },
            { path: 'account', component: AccountDashboardComponent, pathMatch: 'prefix' },
            { path: 'services', component: ServiceDashboardComponent, pathMatch: 'prefix' },
            { path: 'home', component: PrivateHomePageComponent, pathMatch: 'prefix' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecureHomeRoutingModule {}
