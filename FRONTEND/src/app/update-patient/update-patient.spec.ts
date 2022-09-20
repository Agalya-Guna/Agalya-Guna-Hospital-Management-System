import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UpdatePatientComponent } from './update-patient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { DoctorService } from '../services/doctor.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('UpdatepatientComponent', () => {
  let component: UpdatePatientComponent;
  let fixture: ComponentFixture<UpdatePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ UpdatePatientComponent ],
      providers:[ DoctorService,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
