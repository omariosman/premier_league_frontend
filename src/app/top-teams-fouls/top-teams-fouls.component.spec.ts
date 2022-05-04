import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeamsFoulsComponent } from './top-teams-fouls.component';

describe('TopTeamsFoulsComponent', () => {
  let component: TopTeamsFoulsComponent;
  let fixture: ComponentFixture<TopTeamsFoulsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTeamsFoulsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTeamsFoulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
