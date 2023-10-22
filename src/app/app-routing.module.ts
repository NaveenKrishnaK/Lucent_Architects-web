import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


const routes = [
    { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}