import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTechnicianComponent } from './board-technician.component';

describe('BoardTechnicianComponent', () => {
  let component: BoardTechnicianComponent;
  let fixture: ComponentFixture<BoardTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTechnicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
