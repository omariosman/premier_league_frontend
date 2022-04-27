import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMatchReviewComponent } from './show-match-review.component';

describe('ShowMatchReviewComponent', () => {
  let component: ShowMatchReviewComponent;
  let fixture: ComponentFixture<ShowMatchReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMatchReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMatchReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
