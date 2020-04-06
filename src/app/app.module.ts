import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {StarComponent} from './star/star.component';
import {CommentsComponent} from './comments/comments.component';
import {TestdirectiveComponent} from './testdirective/testdirective.component';
import {BasicHighlightDirectiveDirective} from './testdirective/basic-highlight-directive.directive';
import {AdvancedHighlightDirectiveDirective} from './testdirective/advanced-highlight-directive.directive';
import {AccountsComponent} from './accounts/accounts.component';
import {AccountService} from './accounts/account.service';
import {UserComponent} from './user/user.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from './app.routing.module';
import {PubWithoutLoginComponent} from './pub-without-login/pub-without-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StarComponent,
    CommentsComponent,
    TestdirectiveComponent,
    BasicHighlightDirectiveDirective,
    AdvancedHighlightDirectiveDirective,
    AccountsComponent,
    UserComponent,
    UserEditComponent,
    NotFoundComponent,
    PubWithoutLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
