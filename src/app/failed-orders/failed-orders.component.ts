import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { OrderService } from '../services/order.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-failed-orders',
  templateUrl: './failed-orders.component.html',
  styleUrls: ['./failed-orders.component.css']
})
export class FailedOrdersComponent implements OnInit {

  constructor(private orderService: OrderService) { }
  displayedColumns: string[] = ['prescriber', 'resident','medication','directions','messageReceived','vendorType','failMessage','messageXml','archiveOrder'];
  dataSource : MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  showSpinner = true;
  ngOnInit(): void {
    console.log("before" + this.showSpinner)
    this.orderService.getFailedOrders().subscribe((data: any[]) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.showSpinner = false;
      console.log("before" + this.showSpinner)
    })
  }

}
