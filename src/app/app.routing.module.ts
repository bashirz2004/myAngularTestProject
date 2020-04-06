import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {AccountsComponent} from './accounts/accounts.component';
import {StarComponent} from './star/star.component';
import {HomeComponent} from './home/home.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './auth-guard.service';
import {PubWithoutLoginComponent} from './pub-without-login/pub-without-login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'star', canActivate: [AuthGuard], component: StarComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'users', component: UserComponent},
  {path: 'user/:id/:name', component: UserEditComponent},
  {path: 'user/edit', component: UserEditComponent},
  {path: 'youAreNotLoggedIn', component: PubWithoutLoginComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
