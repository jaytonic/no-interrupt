import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import {
  Auth,
  authState,
  signInAnonymously,
  signOut,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  FacebookAuthProvider,
  GithubAuthProvider,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  invalidLoginCredentials: null | string = null;
  invalidRegisterCredentials: null | string = null;

  constructor(
    public fb: NonNullableFormBuilder,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public async onLogin() {
    this.invalidLoginCredentials = null;
    if (this.loginForm.valid) {
      try {
        await signInWithEmailAndPassword(
          this.auth,
          this.loginForm.value.email!,
          this.loginForm.value.password!
        );
        await this.router.navigateByUrl('/');
      } catch (error) {
        this.invalidLoginCredentials = 'Invalid credentials';
      }
    }
  }

  public async onRegister() {
    this.invalidRegisterCredentials = null;
    if (this.registerForm.valid) {
      try {
        await createUserWithEmailAndPassword(
          this.auth,
          this.registerForm.value.email!,
          this.registerForm.value.password!
        );

        await this.router.navigateByUrl('/');
      } catch (error: any) {
        let regex: RegExp = /\(([^)]*)\)/;
        let errorMatch = regex.exec(error);
        if (errorMatch) {
          switch (errorMatch[1]) {
            case AuthErrorCodes.EMAIL_EXISTS:
              this.invalidRegisterCredentials = 'This email is already taken';
              break;
            case AuthErrorCodes.INVALID_EMAIL:
              this.invalidRegisterCredentials = 'Invalid email';
              break;
            case AuthErrorCodes.INVALID_PASSWORD:
              this.invalidRegisterCredentials = 'Invalid password';
              break;
            default:
              this.invalidRegisterCredentials =
                'Unknown error happened: ' + error;
          }
        }
      }
    }
  }

  public async loginWithGoogle() {
    await signInWithPopup(this.auth, new GoogleAuthProvider());
    await this.router.navigateByUrl('/');
  }
  public async loginWithFacebook() {
    await signInWithPopup(this.auth, new FacebookAuthProvider());
    await this.router.navigateByUrl('/');
  }
  public async loginWithGithub() {
    await signInWithPopup(this.auth, new GithubAuthProvider());
    await this.router.navigateByUrl('/');
  }
}
