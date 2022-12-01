import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {TableModule} from 'primeng/table';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { TagModule } from 'primeng/tag';
import {TabViewModule} from 'primeng/tabview';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DividerModule} from 'primeng/divider';


import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientDetailComponent } from './pages/patient/patient-detail/patient-detail.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { AppointmentDetailComponent } from './pages/appointments/appointment-detail/appointment-detail.component';
import { DemoComponent } from './common/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PatientComponent,
    PatientDetailComponent,
    AppointmentsComponent,
    AppointmentDetailComponent,
    DemoComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    TableModule,
    AvatarModule,
    AvatarGroupModule,
    MenuModule,
    TagModule,
    TabViewModule,
    InputSwitchModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  checked1: boolean = false;

  checked2: boolean = true;
 }
