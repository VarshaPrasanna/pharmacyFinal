import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidEssentialsComponent } from './covid-essentials.component';

describe('CovidEssentialsComponent', () => {
  let component: CovidEssentialsComponent;
  let fixture: ComponentFixture<CovidEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidEssentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
