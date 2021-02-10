import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';
import { SingupService } from './singup.service';

@Injectable({
  providedIn: 'root'
})
export class UserNotTakenValidatorService {

  constructor(private singupService: SingupService) { }

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(debounceTime(300)).pipe(switchMap(userName => {
        return this.singupService.checkUserNameTaken(userName)
      })).pipe(map(isTaken => isTaken ? { userNameTaken: true } : null)).pipe(first());
    }
  }

}
