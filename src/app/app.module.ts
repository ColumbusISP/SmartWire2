import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './secure-home/shared';
import { LoginService } from './services/auth/login.service';
import { HttpErrorHandler } from './services/helpers/http-error-handler.service';
import { MessageService } from './services/helpers/message.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { JwtInterceptor } from './services/helpers/jwt.interceptor';


// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};
export function tokenGetter() {
    return localStorage.getItem('token');
  }


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        JwtModule .forRoot({
            config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ['localhost:8081']
              // blacklistedRoutes: ['localhost:3000/auth/']
            }
          }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard,
        LoginService,
        HttpErrorHandler,
        MessageService,
        JwtHelperService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
          }, ],
    bootstrap: [AppComponent]
})
export class AppModule {}
