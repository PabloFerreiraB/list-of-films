import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEditMoviesComponent } from './register-edit-movies.component';

describe('RegisterEditMoviesComponent', () => {
  let component: RegisterEditMoviesComponent;
  let fixture: ComponentFixture<RegisterEditMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterEditMoviesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEditMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
