import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctComponent } from './prodct.component';

describe('ProdctComponent', () => {
  let component: ProdctComponent;
  let fixture: ComponentFixture<ProdctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdctComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
