import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NawigacjaComponent } from './nawigacja.component';

describe('NawigacjaComponent', () => {
  let component: NawigacjaComponent;
  let fixture: ComponentFixture<NawigacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NawigacjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NawigacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
