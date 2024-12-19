import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitgComponent } from './sitg.component';

describe('SitgComponent', () => {
  let component: SitgComponent;
  let fixture: ComponentFixture<SitgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
