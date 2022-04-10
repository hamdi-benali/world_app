import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ContinentsComponent } from './continents/continents.component';
import { DetailsComponent } from './details/details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaysComponent } from './pays/pays.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {path: 'continents', component: ContinentsComponent},
    {path : 'pays/:id',component:PaysComponent},
    {path : 'pays/details/:id', component:DetailsComponent},
    {path: 'home', component: HomeComponent},
     {path: '**', component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
