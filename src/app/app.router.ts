import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: ErrorComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);