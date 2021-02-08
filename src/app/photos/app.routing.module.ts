import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/auth/auth.guard";
import { NotFoundComponent } from "../erros/not-found/not-found.component";
import { SignInComponent } from "../home/sign-in/sign-in.component";
import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoListResolver } from "./photo-list/photo-list.resolver";

const routes: Routes = [
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
    },
    {
        path: '',
        component: SignInComponent,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}