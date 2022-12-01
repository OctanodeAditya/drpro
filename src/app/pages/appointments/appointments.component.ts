import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {

  items!: MenuItem[];
  ngOnInit() {
    this.items = [
        {label: 'Today’s Appointments', icon: 'pi pi-fw pi-plus'},
        {label: 'This Week Appointment', icon: 'pi pi-fw pi-plus'},
        {label: 'This Month Appointment', icon: 'pi pi-fw pi-plus '}
    ];
  }
  checked1: boolean = false;

  checked2: boolean = true;
}
