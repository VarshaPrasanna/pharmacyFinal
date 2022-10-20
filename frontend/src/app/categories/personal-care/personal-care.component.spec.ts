import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCareComponent } from './personal-care.component';

describe('PersonalCareComponent', () => {
  let component: PersonalCareComponent;
  let fixture: ComponentFixture<PersonalCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
