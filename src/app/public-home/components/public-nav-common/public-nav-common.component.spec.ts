import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNavCommonComponent } from './public-nav-common.component';

describe('PublicNavCommonComponent', () => {
  let component: PublicNavCommonComponent;
  let fixture: ComponentFixture<PublicNavCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicNavCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicNavCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
