import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapiezComponent } from './papiez.component';

describe('PapiezComponent', () => {
  let component: PapiezComponent;
  let fixture: ComponentFixture<PapiezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PapiezComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PapiezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
