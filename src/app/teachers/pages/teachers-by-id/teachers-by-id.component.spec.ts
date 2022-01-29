import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersByIdComponent } from './teachers-by-id.component';

describe('TeachersByIdComponent', () => {
  let component: TeachersByIdComponent;
  let fixture: ComponentFixture<TeachersByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
