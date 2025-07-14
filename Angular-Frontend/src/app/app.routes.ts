import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NosPlatsComponent } from './pages/nos-plats/nos-plats.component';
import { NosBoissonsComponent } from './pages/nos-boissons/nos-boissons.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/authentification/login/login.component';
import { RegisterComponent } from './pages/authentification/register/register.component';



export const routes: Routes = [
    {path:'', component: AccueilComponent},
    {path:'nos-plats', component: NosPlatsComponent},
    {path:'nos-boissons', component: NosBoissonsComponent},
    {path:'contact', component: ContactComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},

];
