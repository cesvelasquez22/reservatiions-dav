import { Customer } from "../../customers/models/customer.interface";
import firebase from 'firebase/app'

export interface Reservation {
    uid: string;
    eventName: string;
    eventCategory: EventCategory;
    customer: Customer;
    furniture: Furniture[];
    reservationDate: firebase.firestore.Timestamp;
    openHour: firebase.firestore.Timestamp;
    closeHour: firebase.firestore.Timestamp;
    createdAt: firebase.firestore.Timestamp;
}

export interface EventCategory {
    uid: string;
    name: string;
}

export interface Furniture {
    uid: string;
    furniture: string;
}