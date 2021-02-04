import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { SearchComponent } from "./photo-list/search/search/search.component";
import { PhotoModule } from "./photo/photo.module";


@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        CommonModule
    ]
})
export class PhotosModule {

}