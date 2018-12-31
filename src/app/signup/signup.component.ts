import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SignUpService } from '../services/auth/signup.service';
import { User } from '../secure-home/models/user';

const API_URL = environment.apiUrl;

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    public vurl = API_URL + '/api/signup';
    public createStatus = '';
    public error = '';

    constructor(private translate: TranslateService,
        protected http: HttpClient,
        public signupService: SignUpService,
        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {}
    
    public signUp(email: string, username: string, password: string): void {
        this.error = '';
        email = email.trim();
        username = username.trim();
        password = password.trim();
        if (!email) { return; }
        if (!username) { return; }
        if (!password) { return; }

        const newtmpUser: User = { email, username , password } as User;
        this.signupService.addUser(newtmpUser)
          .subscribe((tmpUser) => {
            const obj = JSON.parse(JSON.stringify(tmpUser));
            if (obj.returnstatus <= 2) { 
                console.log('User created, return code: ' + JSON.stringify(obj));
                this.createStatus = 'User registered.';
                } else {
              this.error = obj.message;
              console.log('User not created, return code: ' + JSON.stringify(obj));
            }
          });
      }
}
