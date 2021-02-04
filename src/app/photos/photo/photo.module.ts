import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CardModule } from "src/app/shared/components/card/card/card.module";
import { PhotoComponent } from "./photo.component";

@NgModule({
    declarations: [
        PhotoComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        CardModule
    ],
    exports: [
        PhotoComponent
    ]
})
export class PhotoModule {

}