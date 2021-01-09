import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { GeneratePasswordComponent } from './generate-password/generate-password.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratePasswordComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
