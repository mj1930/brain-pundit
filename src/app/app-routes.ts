import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { LocationComponent } from './location/location.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: LocationComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });