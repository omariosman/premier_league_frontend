import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeamsSeasonComponent } from './top-teams-season.component';

describe('TopTeamsSeasonComponent', () => {
  let component: TopTeamsSeasonComponent;
  let fixture: ComponentFixture<TopTeamsSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTeamsSeasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTeamsSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
