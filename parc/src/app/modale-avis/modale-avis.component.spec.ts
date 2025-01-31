import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleAvisComponent } from './modale-avis.component';

describe('ModaleAvisComponent', () => {
  let component: ModaleAvisComponent;
  let fixture: ComponentFixture<ModaleAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaleAvisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModaleAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
