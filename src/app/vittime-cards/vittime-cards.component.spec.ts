import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VittimeCardsComponent } from './vittime-cards.component';

describe('VittimeCardsComponent', () => {
  let component: VittimeCardsComponent;
  let fixture: ComponentFixture<VittimeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VittimeCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VittimeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
