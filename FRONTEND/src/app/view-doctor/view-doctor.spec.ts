import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ViewDoctorComponent } from './view-doctor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { DoctorService } from '../services/doctor.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('ViewDoctorComponent', () => {
  let component: ViewDoctorComponent;
  let fixture: ComponentFixture<ViewDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ ViewDoctorComponent ],
      providers:[ DoctorService,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
