import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarmateriasComponent } from './registrarmaterias.component';

describe('RegistrarmateriasComponent', () => {
  let component: RegistrarmateriasComponent;
  let fixture: ComponentFixture<RegistrarmateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarmateriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarmateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
