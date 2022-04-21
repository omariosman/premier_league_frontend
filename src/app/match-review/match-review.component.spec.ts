import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchReviewComponent } from './match-review.component';

describe('MatchReviewComponent', () => {
  let component: MatchReviewComponent;
  let fixture: ComponentFixture<MatchReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
