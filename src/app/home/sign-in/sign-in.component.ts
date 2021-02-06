import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detectpr/platform-detector.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const userName = this.loginForm.get('userName').value
    const password = this.loginForm.get('password').value
    this.authService.authenticate(userName, password).subscribe(() =>
      this.router.navigate(['user', userName]),
      err => {
        console.log(err);
        this.loginForm.reset();
        if (this.platformDetectorService.isPlatformBrowser()) {
          this.userNameInput.nativeElement.focus()
        }
        alert('Invalid user name or password')
      }
    );
  }

}
