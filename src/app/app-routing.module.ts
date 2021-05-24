import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AudifonoComponent } from './audifono/audifono.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'audifono',
    component: AudifonoComponent
  },
  {
    path: 'audifono/:id',
    component: AudifonoComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
