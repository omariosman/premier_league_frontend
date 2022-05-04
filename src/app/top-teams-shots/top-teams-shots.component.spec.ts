import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeamsShotsComponent } from './top-teams-shots.component';

describe('TopTeamsShotsComponent', () => {
  let component: TopTeamsShotsComponent;
  let fixture: ComponentFixture<TopTeamsShotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTeamsShotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTeamsShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
