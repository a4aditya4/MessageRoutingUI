import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs: boolean;
  constructor(private orderService: OrderService) { }
  menuItems =[];

  ngOnInit(): void {
    this.orderService.getMenus().subscribe((data: any[]) => {
      console.log(data);
      debugger
      this.menuItems = data;
    })
  }

}
