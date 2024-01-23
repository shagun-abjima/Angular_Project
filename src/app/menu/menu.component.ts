import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() selectedTable: any;


  searchMenuText: string = '';

  menuItems: any[] = [
    { id: 1, name: 'Alfredo Pasta' },
    { id: 2, name: 'Alfrono Pasta' },
    { id: 3, name: 'Garlic Bread' },
    { id: 4, name: 'Masala Dosa' },
    { id: 5, name: 'Pav Bhaji' },
    { id: 5, name: 'Gulab Jamun' },
    { id: 5, name: 'Kaju Katli' },
    { id: 5, name: 'Paneer Tikka' },
    { id: 5, name: 'Jalebi' },


  ];

  searchMenuItems(): any[] {
    return this.menuItems.filter(item =>
      item.name.toLowerCase().includes(this.searchMenuText.toLowerCase())
    );
  }

  addItemToTable(item: any): void {
    this.selectedTable.items.push(item);
    this.saveItems();
  }

  deleteItemFromTable(item: any): void {
    const index = this.selectedTable.items.indexOf(item);
    if (index !== -1) {
      this.selectedTable.items.splice(index, 1);
      this.saveItems();
    }
  }

  private saveItems(): void {
    sessionStorage.setItem(this.selectedTable.name, JSON.stringify(this.selectedTable.items));
  }
}



