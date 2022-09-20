import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PatientInfoComponent } from './patient-info.component';
import { PatientService } from '../services/patient.service';
import { of } from 'rxjs';

describe('PatientInfoComponent', () => {
  let component: PatientInfoComponent;
  let fixture: ComponentFixture<PatientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ PatientInfoComponent ],
      providers:[PatientService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get patients',() => {

    const id=15;
    const service=fixture.debugElement.injector.get(PatientService);
    spyOn(service,'getPatientId').and.returnValue(of([{id:15}]));
    component.onSubmit();
    expect(component.patient).toBeTruthy();        
  });
});
