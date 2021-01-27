import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { MoviesService } from '../../core/movies.service';
import { ValidateFieldService } from '../../shared/services/validate-field.service';

import { Movie } from '../../shared/models/movies';
import { Alert } from 'src/app/shared/models/alert';

import { AlertComponent } from 'src/app/shared/ui/alert/alert.component';

@Component({
  selector: 'app-register-movies',
  templateUrl: './register-edit-movies.component.html',
  styleUrls: ['./register-edit-movies.component.scss'],
})
export class RegisterEditMoviesComponent implements OnInit {
  formRegister: FormGroup;
  genres: Array<string>;

  constructor(
    public validate: ValidateFieldService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  get f() {
    return this.formRegister.controls;
  }

  ngOnInit(): void {
    this.initialForm(this.createFormWhite());
    this.getGenre();
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
      urlPhoto: [movie.urlPhoto, ''],
      dateRelease: [movie.dateRelease, [Validators.required]],
      description: [movie.description, ''],
      urlIMDb: [movie.urlIMDb, [Validators.required]],
      genre: [movie.genre, [Validators.required]],
    });
  }

  private createFormWhite(): Movie {
    return {
      title: null,
      urlPhoto: null,
      dateRelease: null,
      description: null,
      urlIMDb: null,
      genre: null,
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
    this.moviesService.save(movie).subscribe(
      () => {
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

        dialogRef.afterClosed().subscribe((option: boolean) => {
          if (option) {
            this.router.navigateByUrl('movies');
          } else {
            this.onResetForm();
          }
        });
      },
      () => {
        const config = {
          data: {
            title: 'Error saving record',
            description:
              'The record has not been saved. Please try again later!',
            btnSuccess: 'Close',
          } as Alert,
        };

        this.dialog.open(AlertComponent, config);
      }
    );
  }

  getGenre() {
    this.genres = [
      'Action',
      'Romance',
      'Adventure',
      'Horror',
      'Comedy',
      'Science fiction',
    ];
  }

  onResetForm(): void {
    this.formRegister.reset();
  }
}
