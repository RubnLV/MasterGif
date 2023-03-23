import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsanimeComponent } from './gifsanime.component';

describe('GifsanimeComponent', () => {
  let component: GifsanimeComponent;
  let fixture: ComponentFixture<GifsanimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsanimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsanimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
