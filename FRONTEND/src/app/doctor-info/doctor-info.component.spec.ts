import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DoctorInfoComponent } from './doctor-info.component';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';
import { of } from 'rxjs';
import { Doctor } from '../classes/doctor';

describe('DoctorInfoComponent', () => {
  let component: DoctorInfoComponent;
  let fixture: ComponentFixture<DoctorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ DoctorInfoComponent ],
      providers:[DoctorService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
 
});
