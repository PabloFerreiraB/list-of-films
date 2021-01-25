import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MoviesService } from '../../core/movies.service';
import { ValidateFieldService } from '../../shared/services/validate-field.service';

import { Movie } from '../../shared/models/movies';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/shared/ui/alert/alert.component';
import { Alert } from 'src/app/shared/models/alert';

@Component({
  selector: 'app-register-movies',
  templateUrl: './register-movies.component.html',
  styleUrls: ['./register-movies.component.scss'],
})
export class RegisterMoviesComponent implements OnInit {
  formRegister: FormGroup;

  constructor(
    public validate: ValidateFieldService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private moviesService: MoviesService
  ) {}

  get f() {
    return this.formRegister.controls;
  }

  ngOnInit(): void {
    this.initialForm(this.createFormWhite());
  }

  private initialForm(movie: Movie): void {
    this.formRegister = this.fb.group({
      title: [
        movie.title,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
        ],
      ],
    });
  }

  private createFormWhite(): Movie {
    return {
      title: null,
    } as Movie;
  }

  onSubmit(): void {
    this.formRegister.markAllAsTouched();

    if (this.formRegister.invalid) {
      return;
    }

    const movie = this.formRegister.getRawValue() as Movie;
    this.save(movie);
  }

  private save(movie: Movie): void {
    this.moviesService.save(movie).subscribe(() => {
      const config = {
        // width: '400px',
        data: {
          btnSuccess: 'Back to list',
          btnCancel: 'Register a new movie',
          btnColorCancel: 'primary',
          existsBtnClose: true,
        } as Alert,
      };
      const dialogRef = this.dialog.open(AlertComponent, config);

      this.onResetForm();
    }),
      () => alert('ERRO');
  }

  onResetForm(): void {
    this.formRegister.reset();
  }
}
