import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/customers/models/customer.interface';
import { EventCategory } from '../models/reservation.interface';

@Injectable()
export class ReservationsService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  getEventCategories() {
    return this.afs.collection('eventCategories').snapshotChanges().pipe(
      map((snapshot) => {
        return snapshot.map((action) => {
          const data = action.payload.doc.data() as EventCategory;
          data.uid = action.payload.doc.id;
          return data;
        })
      })
    )
  }

  getCustomers() {
    return this.afs.collection('customers').snapshotChanges().pipe(
      map((snapshot) => {
        return snapshot.map((action) => {
          const data = action.payload.doc.data() as Customer;
          data.uid = action.payload.doc.id;
          return data;
        })
      })
    )
  }
}
