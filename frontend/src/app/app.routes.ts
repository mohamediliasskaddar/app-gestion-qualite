import { Routes } from '@angular/router';
import { NewMeasurementComponent } from './pages/new-measurement/new-measurement.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { NewMoldComponent } from './pages/new-mold/new-mold.component';
import { MesureInfoComponent } from './pages/mesure-info/mesure-info.component';

export const routes: Routes = [
    {path: '', redirectTo: '/landing', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'landing', component: LandingPageComponent},
    {path: 'new-mesure' , component: NewMeasurementComponent},
    {path: 'new-mold', component: NewMoldComponent},
    {path: 'mesure-info', component: MesureInfoComponent}, 
    
    {path: '**', redirectTo: '/landing'}

];
