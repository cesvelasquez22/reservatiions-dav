import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Customer } from 'src/app/customers/models/customer.interface';
import { EventCategory } from '../../models/reservation.interface';
import { ReservationsService } from '../../services/reservations.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent implements OnInit, OnDestroy {
  // FORM
  reservationForm: FormGroup;
  eventCategories: EventCategory[] = [];
  customers: Customer[] = [];


  // UNSUBSCRIBE 
  private unsubscribe$ = new Subject<void>();

  constructor(
    private reservationsService: ReservationsService,
    private formBuilder: FormBuilder,
  ) {
    this.buidForm();
  }

  private buidForm() {
    this.reservationForm = this.formBuilder.group({
      uid: [''],
      eventName: ['', [Validators.required]],
      eventCategory: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      reservationDate: [new Date(), [Validators.required]],
      createdAt: [new Date(), [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getReservationInfo();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getReservationInfo() {
    const reservationInfo = combineLatest(
      this.reservationsService.getEventCategories(),
      this.reservationsService.getCustomers(),
    );

    reservationInfo.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      if (data[0] && data[0].length > 0) {
        this.eventCategories = data[0];
      }

      if (data[1] && data[1].length > 0) {
        this.customers = data[1];
      }
    })
  }

  save() {}

}
