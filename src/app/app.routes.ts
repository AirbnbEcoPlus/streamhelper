import { Routes } from '@angular/router';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { AlertviewComponent } from './alertview/alertview.component';

export const routes: Routes = [
    { path: "dashboard", component: DashboardviewComponent},
    { path: "alert", component: AlertviewComponent}
];

