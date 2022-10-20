import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDevicesComponent } from './health-devices.component';

describe('HealthDevicesComponent', () => {
  let component: HealthDevicesComponent;
  let fixture: ComponentFixture<HealthDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
