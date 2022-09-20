import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ViewPatientComponent } from './view-patient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { DoctorService } from '../services/doctor.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('ViewPatientComponent', () => {
  let component: ViewPatientComponent;
  let fixture: ComponentFixture<ViewPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ ViewPatientComponent ],
      providers:[ DoctorService,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
