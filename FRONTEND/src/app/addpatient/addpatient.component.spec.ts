import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AddpatientComponent } from './addpatient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PatientService } from '../services/patient.service';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
describe('AddpatientComponent', () => {
  let component: AddpatientComponent;
  let fixture: ComponentFixture<AddpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ AddpatientComponent ],
      providers:[ PatientService , DatePipe ,FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
