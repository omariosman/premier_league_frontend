import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeamsYellowCardsComponent } from './top-teams-yellow-cards.component';

describe('TopTeamsYellowCardsComponent', () => {
  let component: TopTeamsYellowCardsComponent;
  let fixture: ComponentFixture<TopTeamsYellowCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTeamsYellowCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTeamsYellowCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
