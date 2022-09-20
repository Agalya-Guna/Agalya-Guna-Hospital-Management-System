import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UpdateDoctorComponent } from './update-doctor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PatientService } from '../services/patient.service';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { DoctorService } from '../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
describe('UpdateDoctorComponent', () => {
  let component: UpdateDoctorComponent;
  let fixture: ComponentFixture<UpdateDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ UpdateDoctorComponent ],
      providers:[ DoctorService,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
