import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeamsMatchesWonComponent } from './top-teams-matches-won.component';

describe('TopTeamsMatchesWonComponent', () => {
  let component: TopTeamsMatchesWonComponent;
  let fixture: ComponentFixture<TopTeamsMatchesWonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTeamsMatchesWonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTeamsMatchesWonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
