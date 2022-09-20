import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AdminLoginComponent } from './admin-login.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DoctorDashboardComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports:[ HttpClientTestingModule],
      declarations: [ AdminLoginComponent ],
      providers:[AdminService,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
