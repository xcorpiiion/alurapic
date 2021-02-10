import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserService } from "../core/user/user.service";
import { ValidationMessageModule } from "../shared/components/validation-message/validation-message.module";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SingupComponent } from "./singup/singup.component";
import { SingupService } from "./singup/singup.service";

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
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        SingupService
    ]
})
export class HomeModule {

}