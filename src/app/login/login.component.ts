import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/auth/login.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../secure-home/models/user';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  public returnUrl: string;
  public error: String = '';
  public vurl = API_URL + '/api/login';
  public rtrnCode: any;
  public clicked: any;
  public rtrnUser: any;

constructor(
    public http: HttpClient,
    public loginService: LoginService,
    private translate: TranslateService,
    public router: Router
    
    ) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
      }

    ngOnInit() {
      this.loginService.logout();
      // Deep linking Support
      // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.returnUrl = 'private';
      this.clicked = false;
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    public login(username: string, password: string): void {
        this.clicked = true;
        this.error = '';
       
        username = username.trim();
        password = password.trim();

        if (!username) { this.clicked = false; return; }
        if (!password) { this.clicked = false; return; }

        const newtmpUser: User = { username , password } as User;
        this.loginService.loginUser(newtmpUser)
          .subscribe(
            (tmpUser) => {
              const obj = JSON.parse(JSON.stringify(tmpUser));
              console.log('User Log in response: ' + JSON.stringify(obj));

              if (obj.returnstatus <= 2) {
                this.router.navigate([this.returnUrl]);
                
              } else { this.error = obj.eventmessage; 
                console.log('Error:' + this.error);
                this.clicked = false;
              }
            },
          error => {
            this.error = error;
            
          }
          );
          
    }
}
