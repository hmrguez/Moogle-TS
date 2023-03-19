import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQueryComponent } from './input-query.component';

describe('InputQueryComponent', () => {
  let component: InputQueryComponent;
  let fixture: ComponentFixture<InputQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
