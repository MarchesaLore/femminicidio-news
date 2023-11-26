import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaSliderComponent } from './ultima-slider.component';

describe('UltimaSliderComponent', () => {
  let component: UltimaSliderComponent;
  let fixture: ComponentFixture<UltimaSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimaSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UltimaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
