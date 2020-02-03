import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './login/register/register.component';
import { LogincComponent } from './login/loginc/loginc.component';
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
import { AuthgaurdService } from './services/authgaurd.service';
import { ForgotpasswordComponent } from './media/forgotpassword/forgotpassword.component';
import { VerifyaccountComponent } from './media/verifyaccount/verifyaccount.component';
import { ResetpasswordComponent } from './media/resetpassword/resetpassword.component';


const routes: Routes = [
  { path:"", redirectTo : "login", pathMatch: "full"},
  { path:"register", component: RegisterComponent},
  { path:"login", component: LogincComponent},
  { path:"gallery", component: GalleryComponent,canActivate : [AuthgaurdService]},
  { path:"mymedia", component: MymediaComponent,canActivate : [AuthgaurdService]},
  { path:"uploadmedia", component: UploadmediaComponent,canActivate : [AuthgaurdService]},
  { path:"followers", component: FallowersComponent,canActivate : [AuthgaurdService]},
  { path:"multimedia", component: MultimediaComponent,canActivate : [AuthgaurdService]},
  { path:"single-media", component: SinglemediaComponent,canActivate : [AuthgaurdService]},
  { path:"news-feed", component: NewsfeedComponent,canActivate : [AuthgaurdService]},
  { path:"blockeduser", component: BlockedcontactsComponent,canActivate : [AuthgaurdService]},
  { path:"accountupdate", component: AccountupdateComponent,canActivate : [AuthgaurdService]},
  { path:"search", component: SearchComponent,canActivate : [AuthgaurdService]},
  { path:"logout", component: LogoutComponent},
  { path:"forgot-password", component: ForgotpasswordComponent},
  { path:"verify-account", component: VerifyaccountComponent},
  { path:"reset-password", component: ResetpasswordComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
