import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "src/app/shared/components/card/card/card.module";
import { DarkenOnHoverModule } from "src/app/shared/components/card/card/directives/darken-on-hover/darken-on-hover.module";
import { PhotoModule } from "../photo/photo.module";
import { FilterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos/photos.component";
import { SearchComponent } from './search/search/search.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        LoadButtonComponent,
        PhotosComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
    ]
})
export class PhotoListModule {

}