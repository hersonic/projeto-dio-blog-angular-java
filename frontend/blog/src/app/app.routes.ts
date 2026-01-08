import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { FeedComponent } from './feed/feed';
import { NgModule } from '@angular/core';
import { ContatoComponent } from './contato/contato';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';




export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'feed', component: FeedComponent
    },
    {
        path: 'contato', component: ContatoComponent
    }
];

@NgModule({
    imports: [RouterModule, FontAwesomeModule, HttpClientModule],
    exports: [RouterModule]
})
export class AppRoutes {}
