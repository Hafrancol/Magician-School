import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTeachersComponent } from './main-page-teachers.component';

describe('MainPageTeachersComponent', () => {
  let component: MainPageTeachersComponent;
  let fixture: ComponentFixture<MainPageTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
