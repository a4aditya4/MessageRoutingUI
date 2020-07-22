import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-neworder-details',
  templateUrl: './neworder-details.component.html',
  styleUrls: ['./neworder-details.component.css']
})
export class NeworderDetailsComponent implements OnInit {

  constructor(private orderService: OrderService,
              private dialogRef: MatDialogRef<NeworderDetailsComponent>) { }
data ={};
  ngOnInit(): void {
    this.orderService.getOrderXml(39).subscribe((data: any) => {
      debugger
      this.data = data;
      const parser = new DOMParser();
      const srcDOM = parser.parseFromString(data.xmlMessage, "application/xml");
      console.log(srcDOM)
      //Converting DOM Tree To JSON.
       console.log(this.xml2json(srcDOM));
       console.log(data)
    })
  }

 onClose(){
   this.dialogRef.close();
 }

/**
 * This function coverts a DOM Tree into JavaScript Object.
 * @param srcDOM: DOM Tree to be converted.
 */
 xml2json(srcDOM) {
  let children = [...srcDOM.children];

  // base case for recursion.
  if (!children.length) {
    return srcDOM.innerHTML
  }

  // initializing object to be returned.
  let jsonResult = {};

  for (let child of children) {

    // checking is child has siblings of same name.
    let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;

    // if child is array, save the values as array, else as strings.
    if (childIsArray) {
      if (jsonResult[child.nodeName] === undefined) {
        jsonResult[child.nodeName] = [this.xml2json(child)];
      } else {
        jsonResult[child.nodeName].push(this.xml2json(child));
      }
    } else {
      jsonResult[child.nodeName] = this.xml2json(child);
    }
  }

  return jsonResult;
}


}
