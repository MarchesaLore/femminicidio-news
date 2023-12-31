import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInfoComponent } from './info.component';

describe('NewInfoComponent', () => {
  let component: NewInfoComponent;
  let fixture: ComponentFixture<NewInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
