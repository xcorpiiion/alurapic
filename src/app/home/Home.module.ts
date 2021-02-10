import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ValidationMessageModule } from "../shared/components/validation-message/validation-message.module";
import { HomeComponent } from "./home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SingupComponent } from "./singup/singup.component";

@NgModule({
    declarations: [
        SignInComponent,
        SingupComponent,
        HomeComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        ValidationMessageModule,
        RouterModule
    ]
})
export class HomeModule {

}