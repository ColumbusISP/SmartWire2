import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { ProfileService } from '../../../services/customer/profile';
import { Profile } from '../../../models/profile';
import { ConsumerContextService } from 'src/app/services/customer/consumerContext';
import { ConsumerContext } from 'src/app/models/consumerContext';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    public profile: Profile;
    public consumerContext: ConsumerContext;
    // currentProfile: Observable<Profile>;
    public currentUser = JSON.parse(localStorage.getItem('currentUser'));

    constructor(private translate: TranslateService, 
        public router: Router,
        private loginService: LoginService,
        private profileService: ProfileService,
        private consumerContextService: ConsumerContextService) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }
    
    ngOnInit() {
        this.pushRightClass = 'push-right';
        this.profileService.getCustomer(this.currentUser.id)
            .subscribe((profile: Profile) => {
                return this.profile = profile;
            });
            
        this.consumerContextService.getConsumerContext(this.currentUser.id)
            .subscribe((consumerContext: ConsumerContext) => { 
                return this.consumerContext = consumerContext[0];
            });
            
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.loginService.logout();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
