import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageStudentsComponent } from './main-page-students.component';

describe('MainPageStudentsComponent', () => {
  let component: MainPageStudentsComponent;
  let fixture: ComponentFixture<MainPageStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
