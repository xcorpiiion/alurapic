import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ValidationMessageModule } from "src/app/shared/components/validation-message/validation-message.module";
import { PhotoFormComponent } from "./photo-form.component";

@NgModule({
    declarations: [
        PhotoFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ValidationMessageModule
    ]
})
export class PhotoFormModule {

}