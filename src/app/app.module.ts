import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ErrosComponent } from './erros/erros.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { AppRoutingModule } from './photos/app.routing.module';
import { PhotosModule } from './photos/photos.module';
import { SigninComponent } from './home/signin/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrosComponent,
    NotFoundComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
