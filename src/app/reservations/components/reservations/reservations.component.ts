import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reservation } from '../../models/reservation.interface';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  // TABLE
  displayedColumns: string[] = ['position', 'eventName', 'eventCategory', 'customer', 'reservationDate'];
  dataSource = new MatTableDataSource<Reservation>([]);

  constructor() { }

  ngOnInit(): void {
  }

} 
