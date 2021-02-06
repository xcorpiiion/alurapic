import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ErrosComponent } from './erros/erros.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { HomeModule } from './home/Home.module';
import { AppRoutingModule } from './photos/app.routing.module';
import { PhotosModule } from './photos/photos.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
