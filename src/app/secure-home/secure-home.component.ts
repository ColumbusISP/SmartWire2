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
    public consumerContext: ConsumerContext[] = [ new ConsumerContext ];
    
    public currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    constructor(
        private consumerContextService: ConsumerContextService) {}

    ngOnInit() {
        
        this.consumerContextService.getConsumerContext(this.currentUser.id)
            .subscribe((consumerContext: ConsumerContext[]) => { 
                // Set Defaults if Consumer has no building unit provisioned
                if (consumerContext.length === 0) {
                    this.consumerContext[0].BuildingAddress = 'No Service';
                    this.consumerContext[0].ISPName = 'SmartWire';
                    this.consumerContext[0].BuildingUnitIdentifier = 'Choose Unit for Account';    
                } else {
                    this.consumerContext[0] = consumerContext[0];
                }
                return this.consumerContext[0];                
            });

    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
