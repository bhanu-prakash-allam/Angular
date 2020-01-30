import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MediaComponent } from './media/media.component';
import { UpdatemediaComponent } from './updatemedia/updatemedia.component';


const routes: Routes = [
  { path:"", redirectTo : "home", pathMatch: "full"},
    { path:"home", component: HomeComponent},
    { path:"contactus", component: ContactComponent},
    { path:"aboutus", component: AboutComponent},
    { path:"search/:searchText", component: SearchresultComponent},
    { path:"login", component: LoginComponent},
    { path:"logout", component: LogoutComponent},
    { path:"media", component: MediaComponent},
    { path:"updatemedia/:sn", component: UpdatemediaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
