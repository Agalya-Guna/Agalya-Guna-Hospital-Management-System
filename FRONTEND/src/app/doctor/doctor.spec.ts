import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DoctorComponent } from './doctor.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DoctorDashboardComponent', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports:[ HttpClientTestingModule],
      declarations: [ DoctorComponent ],
      providers:[AdminService,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
