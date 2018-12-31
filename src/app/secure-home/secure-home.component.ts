import { Component, OnInit } from '@angular/core';


import { ConsumerContextService } from './services/consumerContext';
import { ConsumerContext } from './models/consumerContext';


@Component({
    selector: 'app-secure-home',
    templateUrl: './secure-home.component.html',
    styleUrls: ['./secure-home.component.scss']
})
export class SecureHomeComponent implements OnInit {
    collapedSideBar: boolean;
    
    public consumerContext: ConsumerContext;
    public currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    constructor(
        private consumerContextService: ConsumerContextService) {}

    ngOnInit() {
        
        this.consumerContextService.getConsumerContext(this.currentUser.id)
            .subscribe((consumerContext: ConsumerContext) => { 
                return this.consumerContext = consumerContext[0];
            });
            
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
