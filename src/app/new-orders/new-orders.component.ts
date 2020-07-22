import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../services/order.service';
import {MatTableDataSource} from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NeworderDetailsComponent } from './neworder-details/neworder-details.component';
import {SelectionModel} from '@angular/cdk/collections';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.css']
})
export class NewOrdersComponent implements OnInit {

  constructor(private orderService: OrderService,
              private notificationService: NotificationService,
              private dialog: MatDialog) { }
  displayedColumns: string[] = ['select','prescriber', 'resident','medication','directions','messageReceived','AdditionalDetail','ArchiveOrder'];
  dataSource : MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
/** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  ngOnInit(): void {

    this.orderService.getNewOrders().subscribe((data: any[]) => {
      debugger
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data,filter) =>{
        return this.displayedColumns.some(col =>{
          return  (col != 'AdditionalDetail' && col != 'ArchiveOrder') && data[col].toLowerCase().indexOf(filter) != -1;
        });
      };

    })
  }

  onClearSearch(){
    this.searchKey ="";
    this.applyFillter();
  }

  applyFillter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onViewDetail(){
    debugger
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(NeworderDetailsComponent,dialogConfig);
  }

  submitToLtc400(){
    debugger
    orders : [];
    if(this.selection.selected.length == 0)
      this.notificationService.warn('! No order has been selected to submit.  Please select a row or rows to submit.');
    else{
      let currentArray = this.selection.selected;
      currentArray.forEach(function(value){
        debugger
        console.log(value);
        this.orders.push(value);
      });
  }
     console.log(this.selection.selected)
  }
}
