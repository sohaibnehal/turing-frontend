import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SignInComponent } from '../../components';
import * as fromStore from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() cart$: { [key: string]: number };
  authenticated$: Observable<boolean>;

  constructor(
    private modalService: NgbModal,
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit() {
    this.authenticated$ = this.store.select(fromStore.getIsAuthenticated);
  }

  openSignInModal() {
    const modalRef = this.modalService.open(SignInComponent);
    modalRef.componentInstance.isAuthenticated = this.authenticated$;
    modalRef.componentInstance.signin.subscribe(
      (payload: { username: string; password: string }) => {
        this.store.dispatch(new fromStore.SignIn(payload));
      }
    );
    modalRef.componentInstance.register.subscribe(
      (payload: { username: string; email: string; password: string }) => {
        this.store.dispatch(new fromStore.Register(payload));
      }
    );
    modalRef.componentInstance.hideModal.subscribe(() => {
      modalRef.close();
    });
  }

  signout() {
    this.store.dispatch(new fromStore.SignOutUser());
  }
}
