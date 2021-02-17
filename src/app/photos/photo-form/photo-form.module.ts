import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ImmediateClickModule } from "src/app/shared/components/card/card/directives/immediate-click/immediate-click.module";
import { ValidationMessageModule } from "src/app/shared/components/validation-message/validation-message.module";
import { PhotoModule } from "../photo/photo.module";
import { PhotoFormComponent } from "./photo-form.component";

@NgModule({
    declarations: [
        PhotoFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ValidationMessageModule,
        PhotoModule,
        ImmediateClickModule,
        RouterModule
    ]
})
export class PhotoFormModule {

}