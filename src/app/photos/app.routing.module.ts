import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/auth/auth.guard";
import { NotFoundComponent } from "../erros/not-found/not-found.component";
import { PhotoDetailsComponent } from "./photo-details/photo-details.component";
import { PhotoFormComponent } from "./photo-form/photo-form.component";
import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoListResolver } from "./photo-list/photo-list.resolver";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule'
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
        component: PhotoFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'photo/:photoId',
        component: PhotoDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**/',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}