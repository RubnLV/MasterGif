import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsseriesComponent } from './gifsseries.component';

describe('GifsseriesComponent', () => {
  let component: GifsseriesComponent;
  let fixture: ComponentFixture<GifsseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsseriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
