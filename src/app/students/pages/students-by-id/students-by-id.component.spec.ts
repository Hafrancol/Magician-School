import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsByIdComponent } from './students-by-id.component';

describe('StudentsByIdComponent', () => {
  let component: StudentsByIdComponent;
  let fixture: ComponentFixture<StudentsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
