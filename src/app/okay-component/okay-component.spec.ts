import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkayComponent } from './okay-component';

describe('OkayComponent', () => {
  let component: OkayComponent;
  let fixture: ComponentFixture<OkayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OkayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OkayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
