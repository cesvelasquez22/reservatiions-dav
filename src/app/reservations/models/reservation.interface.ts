import { Customer } from "../../customers/models/customer.interface";

export interface Reservation {
    uid: string;
    eventCategory: EventCategory;
    furniture: Furniture[];
    customer: Customer;
}

export interface EventCategory {
    uid: string;
    eventCategory: string;
}

export interface Furniture {
    uid: string;
    furniture: string;
}