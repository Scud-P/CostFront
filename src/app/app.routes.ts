import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RawmaterialsComponent } from './rawmaterials/rawmaterials.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Default route
    { path: 'rawmaterials', component: RawmaterialsComponent },
];
