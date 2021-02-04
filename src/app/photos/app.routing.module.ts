import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../erros/not-found/not-found.component";
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
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}