
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferrerComponent } from './referrer.component';

describe('ReferrerComponent', () => {
  let component: ReferrerComponent;
  let fixture: ComponentFixture<ReferrerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
