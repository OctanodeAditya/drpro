import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './common/demo/demo.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { PatientDetailComponent } from './pages/patient/patient-detail/patient-detail.component';
import { PatientComponent } from './pages/patient/patient.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: "patient",
    component: PatientComponent,
    pathMatch: "full",
  },
  {
    path: "appointments",
    component: AppointmentsComponent,
    pathMatch: "full",
  },
  {
    path: "demo",
    component: DemoComponent,
    pathMatch: "full",
  },
  {
    path: "detail",
    component: PatientDetailComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

