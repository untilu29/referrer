import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'referrer',
  templateUrl: './referrer.component.html',
  styleUrls: ['./referrer.component.css']
})
export class ReferrerComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private breakpointObserver: BreakpointObserver) { }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}
