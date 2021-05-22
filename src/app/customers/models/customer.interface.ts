import firebase from 'firebase/app'

export interface Customer {
    uid: string;
    name: string;
    email: string;
    birthdate: firebase.firestore.Timestamp;
    customerState: CustomerState;
}

export interface CustomerState {
    uid: string;
    state: string;
}

