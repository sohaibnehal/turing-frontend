import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  view: string; // signin, register, forgotpwrd
  signinform: FormGroup;
  registerform: FormGroup;
  @Input() isAuthenticated: Observable<boolean>;
  @Output() signin = new EventEmitter<any>();
  @Output() register = new EventEmitter<any>();
  @Output() hideModal = new EventEmitter<any>();

  constructor(public activeModal: NgbActiveModal, formBuilder: FormBuilder) {
    this.signinform = formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
    this.registerform = formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.view = 'signin';
    // As soon as the user is authenticated, we would close the modal
    this.isAuthenticated.subscribe((authenticated: boolean) => {
      if (authenticated) {
        this.hideModal.emit();
      }
    });
  }

  onSignin() {
    this.validateFields(this.signinform);
    if (!this.signinform.valid) {
      return;
    }
    const payload = {
      username: this.signinform.get('username').value,
      password: this.signinform.get('password').value
    };
    this.signin.emit(payload);
  }

  onRegister() {
    this.validateFields(this.registerform);
    if (!this.registerform.valid) {
      return;
    }
    const payload = {
      username: this.registerform.get('username').value,
      email: this.registerform.get('email').value,
      password: this.registerform.get('password').value
    };
    this.register.emit(payload);
  }

  validateFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsDirty();
    });
  }
}
