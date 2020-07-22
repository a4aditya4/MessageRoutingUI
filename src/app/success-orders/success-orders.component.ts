import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../services/order.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-success-orders',
  templateUrl: './success-orders.component.html',
  styleUrls: ['./success-orders.component.css']
})
export class SuccessOrdersComponent implements OnInit {

  constructor(private orderService: OrderService) { }
  displayedColumns: string[] = ['prescriber', 'resident','medication','directions','messageReceived','facilityId','vendorType','messageXml'];
  dataSource : MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  showSpinner = true;

  ngOnInit(): void {
    console.log("before" + this.showSpinner)
    this.orderService.getSuccessOrders().subscribe((data: any[]) => {
      console.log(data);
      debugger
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.showSpinner = false;
      console.log("before" + this.showSpinner)
    })
  }

}
