import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReceptionLoginComponent } from './reception-login.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DoctorDashboardComponent', () => {
  let component: ReceptionLoginComponent;
  let fixture: ComponentFixture<ReceptionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports:[ HttpClientTestingModule],
      declarations: [ ReceptionLoginComponent ],
      providers:[AdminService,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionLoginComponent);
    component = fixture.componentInstance;  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
