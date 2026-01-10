import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariPractiques } from './formulari-practiques';

describe('FormulariPractiques', () => {
  let component: FormulariPractiques;
  let fixture: ComponentFixture<FormulariPractiques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariPractiques]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariPractiques);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
