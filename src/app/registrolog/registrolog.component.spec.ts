import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrologComponent } from './registrolog.component';

describe('RegistrologComponent', () => {
  let component: RegistrologComponent;
  let fixture: ComponentFixture<RegistrologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrologComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
