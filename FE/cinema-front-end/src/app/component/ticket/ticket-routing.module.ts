import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TicketManagementListComponent} from './ticket-management/ticket-management-list/ticket-management-list.component';
import {TicketManagementDeleteComponent} from './ticket-management/ticket-management-delete/ticket-management-delete.component';
import {PaymentBookingTicketComponent} from './payment-booking-ticket/payment-booking-ticket.component';
import {ConfirmBookingTicketComponent} from './confirm-booking-ticket/confirm-booking-ticket.component';
import {BookingTicketComponent} from './booking-ticket/booking-ticket.component';
import {BookingSeatComponent} from './booking-seat/booking-seat.component';
import {AuthGuard} from '../decentralization/auth.guard';
import {PointHistoryComponent} from "./point-history/point-history.component";
import {BookingTicketHistoryComponent} from "./booking-ticket-history/booking-ticket-history.component";
import {CanceledTicketHistoryComponent} from "./canceled-ticket-history/canceled-ticket-history.component";

const routes: Routes = [
  {
    path: 'booking-ticket',
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CUSTOMER']
    }, component: BookingTicketComponent
  },
  {
    path: 'booking-seat',
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CUSTOMER']
    },
    component: BookingSeatComponent
  },
  {
    path: 'payment-ticket',
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CUSTOMER']
    },
    component: PaymentBookingTicketComponent
  },
  {
    path: 'confirm-ticket',
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CUSTOMER']
    }, component: ConfirmBookingTicketComponent
  },
  {
    path: 'list-management',
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_EMPLOYEE']
    },
    component: TicketManagementListComponent
  },
  {
    path: 'delete-management',
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_EMPLOYEE']
    },
    component: TicketManagementDeleteComponent
  },
  {
    path: 'history/point',
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CUSTOMER']
    },
    component: PointHistoryComponent
  },
  {
    path: 'history/booking',
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CUSTOMER']
    },
    component: BookingTicketHistoryComponent
  },
  {
    path: 'history/canceled',
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CUSTOMER']
    },
    component: CanceledTicketHistoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule {
}
