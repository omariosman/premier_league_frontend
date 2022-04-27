import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFanComponent } from './insert-fan.component';

describe('InsertFanComponent', () => {
  let component: InsertFanComponent;
  let fixture: ComponentFixture<InsertFanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertFanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
