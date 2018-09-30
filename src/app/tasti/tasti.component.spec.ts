import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastiComponent } from './tasti.component';

describe('TastiComponent', () => {
  let component: TastiComponent;
  let fixture: ComponentFixture<TastiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
