import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent} from "~/login/login.component";
import { RegisterComponent } from "~/register/register.component";
import { LieuComponent } from "~/lieu/lieu.component";

const routes: Routes = [

    { path: "", component: LoginComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "register", component: RegisterComponent },
    { path: "lieu", component: LieuComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }