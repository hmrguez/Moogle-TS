import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocFormComponent } from './add-doc-form.component';

describe('AddDocFormComponent', () => {
  let component: AddDocFormComponent;
  let fixture: ComponentFixture<AddDocFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDocFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDocFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
