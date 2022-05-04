import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersWithPositionComponent } from './players-with-position.component';

describe('PlayersWithPositionComponent', () => {
  let component: PlayersWithPositionComponent;
  let fixture: ComponentFixture<PlayersWithPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersWithPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersWithPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
