import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "../core/auth/login.guard";
import { HomeComponent } from "./home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SingupComponent } from "./singup/singup.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: SignInComponent,
        data: {
          title: 'Sign in'
        }
      },
      {
        path: 'signup',
        component: SingupComponent,
        data: {
          title: 'Sign up'
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}