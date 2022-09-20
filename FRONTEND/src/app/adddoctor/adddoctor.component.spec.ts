import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdddoctorComponent } from './adddoctor.component';
import { DoctorService } from '../services/doctor.service';
import { FormBuilder } from '@angular/forms';

describe('AdddoctorComponent', () => {
  let component: AdddoctorComponent;
  let fixture: ComponentFixture<AdddoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ AdddoctorComponent ],
      providers:[DoctorService,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
