import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: '', loadChildren: './public-layout/public-layout.module#PublicLayoutModule' },
    { path: 'home', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'public-home', loadChildren: './public-layout/public-layout.module#PublicLayoutModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './other/server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './other/access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './other/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 
export class AppRoutingModule {}
