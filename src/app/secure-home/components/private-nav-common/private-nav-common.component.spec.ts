import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateNavCommonComponent } from './private-nav-common.component';

describe('PrivateNavCommonComponent', () => {
  let component: PrivateNavCommonComponent;
  let fixture: ComponentFixture<PrivateNavCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateNavCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateNavCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
