import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/auth/auth.guard";
import { NotFoundComponent } from "../erros/not-found/not-found.component";
import { HomeComponent } from "../home/home.component";
import { SignInComponent } from "../home/sign-in/sign-in.component";
import { SingupComponent } from "../home/singup/singup.component";
import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoListResolver } from "./photo-list/photo-list.resolver";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: SignInComponent,
            },
            {
                path: 'signup',
                component: SingupComponent
            }
        ]
    },
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    {
        path: 'photo/add',
        component: PhotoListComponent
    },
    {
        path: '**/',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}