import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MoviesService } from '../../core/movies.service';
import { ValidateFieldService } from '../../shared/services/validate-field.service';

import { Movie } from '../../shared/models/movies';

@Component({
  selector: 'app-register-movies',
  templateUrl: './register-movies.component.html',
  styleUrls: ['./register-movies.component.scss'],
})
export class RegisterMoviesComponent implements OnInit {
  formRegister: FormGroup;

  constructor(
    private fb: FormBuilder,
    public validate: ValidateFieldService,
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
      alert('OK');

      this.onResetForm();
    }),
      () => alert('ERRO');
  }

  onResetForm(): void {
    this.formRegister.reset();
  }
}
