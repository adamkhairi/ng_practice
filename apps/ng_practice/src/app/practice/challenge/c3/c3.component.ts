import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, delay, finalize, of, switchMap, tap, throwError} from "rxjs";

@Component({
  selector: 'sr-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {
  loginForm: FormGroup;
  isLoading = false;
  isSuccess = false;
  errorMessage = '';
  userName = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    debugger
    if (this.loginForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';

    const fakeLoginService$ = of(Math.random()).pipe(
      delay(900),
      switchMap((randomNumber) => {
        if (randomNumber < 0.5) {
          return throwError('Invalid credentials');
        } else {
          return of({userName: 'Adam Khairi'});
        }
      }),
      catchError((error) => {
        this.errorMessage = error;
        return of(null);
      })
    );

    fakeLoginService$
    .pipe(
      tap((response) => {
        if (response) {
          this.isSuccess = true;
          this.userName = response.userName;
        }
      }),
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe();
  }

  // email!: string;
  // password!: string;
  // buttonText = 'Login';
  // isSubmitting = false;
  // errorMessage = '';
  //
  // constructor(private fakeLoginService: FakeLoginService) {}
  //
  // onSubmit() {
  //   this.isSubmitting = true;
  //   this.errorMessage = '';
  //
  //   this.fakeLoginService
  //   .login(this.email, this.password)
  //   .pipe(
  //     tap(() => {
  //       this.buttonText = 'Logging in...';
  //     }),
  //     switchMap((response) => {
  //       return timer(5000).pipe(
  //         tap(() => {
  //           if (response.success) {
  //             this.buttonText = response.username;
  //           } else {
  //             this.errorMessage = response.error;
  //           }
  //           this.isSubmitting = false;
  //         })
  //       );
  //     })
  //   )
  //   .subscribe();
  // }

}
