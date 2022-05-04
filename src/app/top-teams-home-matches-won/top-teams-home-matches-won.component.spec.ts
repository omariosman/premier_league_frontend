import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeamsHomeMatchesWonComponent } from './top-teams-home-matches-won.component';

describe('TopTeamsHomeMatchesWonComponent', () => {
  let component: TopTeamsHomeMatchesWonComponent;
  let fixture: ComponentFixture<TopTeamsHomeMatchesWonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTeamsHomeMatchesWonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTeamsHomeMatchesWonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
