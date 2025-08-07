import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NosPlatsComponent } from './pages/nos-plats/nos-plats.component';
import { NosBoissonsComponent } from './pages/nos-boissons/nos-boissons.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/authentification/login/login.component';
import { RegisterComponent } from './pages/authentification/register/register.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { QuiSommesNousComponent } from './pages/qui-sommes-nous/qui-sommes-nous.component';
import { FaqComponent } from './pages/faq/faq.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';




export const routes: Routes = [

    // Routes client
    {path:'', component: AccueilComponent},
    {path:'nos-plats', component: NosPlatsComponent},
    {path:'nos-boissons', component: NosBoissonsComponent},
    {path:'contact', component: ContactComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'à-propos', component: AProposComponent},
    {path:'qui-sommes-nous', component: QuiSommesNousComponent},
    {path:'foire-aux-questions', component: FaqComponent},
    {path:'mentions-légales', component: MentionsLegalesComponent},




    //Routes Admin
    {path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)}
];
