import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SectionloginComponent } from './sectionlogin/sectionlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryFormComponent,
    NavigationComponent,
    SectionloginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
