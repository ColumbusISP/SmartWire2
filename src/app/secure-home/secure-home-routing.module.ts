import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureHomeComponent } from './secure-home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: SecureHomeComponent,
        children: [
            { path: 'profile', component: ProfileComponent, pathMatch: 'prefix' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecureHomeRoutingModule {}
