import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PatientComponent } from './patient.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DoctorDashboardComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports:[ HttpClientTestingModule],
      declarations: [ PatientComponent ],
      providers:[AdminService,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
