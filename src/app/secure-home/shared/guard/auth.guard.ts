import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private loginService: LoginService) {}

    canActivate() {
        if (this.loginService.isAuthenticated()) {
            console.log('auth = true');
            return true;
        } else {
            console.log('auth = false');
            this.router.navigate(['/login']);
            return false;
        }
    }
}

