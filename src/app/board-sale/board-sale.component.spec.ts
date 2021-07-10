import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSaleComponent } from './board-sale.component';

describe('BoardSaleComponent', () => {
  let component: BoardSaleComponent;
  let fixture: ComponentFixture<BoardSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
