import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';
import { UserComponent } from './head/user/user.component';
import { LogincComponent } from './login/loginc/loginc.component';
import { RegisterComponent } from './login/register/register.component';
import { GalleryComponent } from './media/gallery/gallery.component';
import { MymediaComponent } from './media/mymedia/mymedia.component';
import { UploadmediaComponent } from './media/uploadmedia/uploadmedia.component';
import { FallowersComponent } from './media/fallowers/fallowers.component';
import { MultimediaComponent } from './media/multimedia/multimedia.component';
import { SinglemediaComponent } from './media/singlemedia/singlemedia.component';
import { NewsfeedComponent } from './media/newsfeed/newsfeed.component';
import { BlockedcontactsComponent } from './media/blockedcontacts/blockedcontacts.component';
import { AccountupdateComponent } from './media/accountupdate/accountupdate.component';
import { SearchComponent } from './media/search/search.component';
import { LogoutComponent } from './media/logout/logout.component';
import { ForgotpasswordComponent } from './media/forgotpassword/forgotpassword.component';
import { VerifyaccountComponent } from './media/verifyaccount/verifyaccount.component';
import { ResetpasswordComponent } from './media/resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    LogincComponent,
    RegisterComponent,
    GalleryComponent,
    MymediaComponent,
    UploadmediaComponent,
    FallowersComponent,
    MultimediaComponent,
    SinglemediaComponent,
    NewsfeedComponent,
    BlockedcontactsComponent,
    AccountupdateComponent,
    SearchComponent,
    LogoutComponent,
    ForgotpasswordComponent,
    VerifyaccountComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
