import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "src/app/shared/components/card/card/card.module";
import { PhotoModule } from "../photo/photo.module";
import { PhotoFormComponent } from "./photo-form.component";

@NgModule({
    declarations: [
        PhotoFormComponent,
    ],
    imports: [
        CommonModule,
        PhotoModule
    ]
})
export class PhotoFormModule {

}