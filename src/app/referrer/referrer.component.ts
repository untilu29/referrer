import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ReferrerService } from './referrer.service';



@Component({
  selector: 'referrer',
  templateUrl: './referrer.component.html',
  styleUrls: ['./referrer.component.scss']
})
export class ReferrerComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  referrerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    countryCode: new FormControl(''),
    phoneNo: new FormControl(''),
    otp: new FormControl(''),
    referralCode: new FormControl(''),
  })

  constructor(private breakpointObserver: BreakpointObserver, private referrerService: ReferrerService) { }
  getErrorMessage(field) {
    switch (field) {
      case 'name':
        return this.referrerForm.controls[field].hasError('required') ? 'You must enter a value' : '';

      case 'email':
        return this.referrerForm.controls[field].hasError('required') ? 'You must enter a value' :
          this.referrerForm.controls[field].hasError('email') ? 'Not a valid email' : '';
      default: {
        return '';
      }
    }
  }

  onSubmit(){
    this.referrerService.sendSmsCode(this.referrerForm.value).subscribe(data=>{
      console.log(data);
    })
  }
}
