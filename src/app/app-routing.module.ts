import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../app/contact/contact.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { TdrivenComponent } from './tdriven/tdriven.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'template', component: TdrivenComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
