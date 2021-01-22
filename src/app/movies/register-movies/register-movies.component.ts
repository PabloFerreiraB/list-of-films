import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Movie } from '../../shared/models/movies';

@Component({
  selector: 'app-register-movies',
  templateUrl: './register-movies.component.html',
  styleUrls: ['./register-movies.component.scss'],
})
export class RegisterMoviesComponent implements OnInit {
  formRegister: FormGroup;

  constructor(private fb: FormBuilder) {}

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
          Validators.maxLength(256),
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
    if (this.formRegister.invalid) {
      return;
    }

    alert(JSON.stringify(this.formRegister.value, null, 4));
  }

  onResetForm(): void {
    this.formRegister.reset();
  }
}
