import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocisalComponent } from './socisal.component';

describe('SocisalComponent', () => {
  let component: SocisalComponent;
  let fixture: ComponentFixture<SocisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
