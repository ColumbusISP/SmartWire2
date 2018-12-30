import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { PublicLayoutComponent } from './public-layout.component';
import { PublicLayoutModule } from './public-layout.module';

describe('LayoutComponent', () => {
  let component: PublicLayoutComponent;
  let fixture: ComponentFixture<PublicLayoutComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          PublicLayoutModule,
          RouterTestingModule,
          TranslateModule.forRoot(),
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
