import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidiaFormComponent } from './midia-form.component';

describe('MidiaFormComponent', () => {
  let component: MidiaFormComponent;
  let fixture: ComponentFixture<MidiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidiaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
