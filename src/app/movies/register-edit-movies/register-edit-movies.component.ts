import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { MoviesService } from '../../core/services/movies.service';
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
  id: number;

  constructor(
    public validate: ValidateFieldService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  get f() {
    return this.formRegister.controls;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.moviesService
        .view(this.id)
        .subscribe((movie: Movie) => this.initialForm(movie));
    } else {
      this.initialForm(this.createFormWhite());
    }

    this.getGenre();
  }

  onSubmit(): void {
    this.formRegister.markAllAsTouched();

    if (this.formRegister.invalid) {
      return;
    }

    const movie = this.formRegister.getRawValue() as Movie;

    if (this.id) {
      movie.id = this.id;
      this.edit(movie);
    } else {
      this.save(movie);
    }
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

  cancel(): void {
    this.router.navigateByUrl('movies');
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
            this.formRegister.reset();
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

  private edit(movie: Movie): void {
    this.moviesService.edit(movie).subscribe(
      () => {
        const config = {
          data: {
            description: 'Registry changes have been saved successfully!',
            btnSuccess: 'Go to the list',
          } as Alert,
        };

        const dialogRef = this.dialog.open(AlertComponent, config);
        dialogRef
          .afterClosed()
          .subscribe(() => this.router.navigateByUrl('movies'));
      },
      () => {
        const config = {
          data: {
            title: 'Erro ao editar o registro!',
            description:
              'Não conseguimos editar seu registro, favor tentar novamente mais tarde',
            btnColorSuccess: 'warn',
            btnSuccess: 'Fechar',
          } as Alert,
        };

        this.dialog.open(AlertComponent, config);
      }
    );
  }
}
