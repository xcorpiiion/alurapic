import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detectpr/platform-detector.service';
import { lowerCaseValidatior } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SingupService } from './singup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  signupForm: FormGroup
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>

  constructor(private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private service: SingupService, private router: Router,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]],
      userName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40),
        lowerCaseValidatior], this.userNotTakenValidatorService.checkUserNameTaken()],
    })
    if (this.platformDetectorService.isPlatformBrowser()) {
      this.emailInput.nativeElement.focus()
    }
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.service.signup(newUser).subscribe(() => this.router.navigate(['']),
      error => console.error(error)
    )
  }

}
