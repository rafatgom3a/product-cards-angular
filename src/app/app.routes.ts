import { Routes } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent, title: "Home" },
    {path: 'about', component: AboutComponent, title: "About" },
    {path: 'contact', component: ContactComponent, title: "Contact" },
    {path: 'products', component: ProductComponent, title:"Products" },

    {path: '**', component: NotFoundComponent, title: "Not Found" }
];
