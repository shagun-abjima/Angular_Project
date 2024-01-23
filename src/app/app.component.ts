import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Table-Booking-app';
  selectedTable: any;

  tables: any[] = [
    { name: 'Table 1', items: [] },
    { name: 'Table 2', items: [] },
    { name: 'Table 3', items: [] },
    { name: 'Table 4', items: [] },
    { name: 'Table 5', items: [] },
    { name: 'Table 6', items: [] },
  ];


  ngOnInit(): void {
    // Set the default selected table
    this.selectedTable = this.tables[0];
  }

  onTableSelected(table: any): void {
    this.selectedTable = table;
  }

}




