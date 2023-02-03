import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/services/drink.service';
import { InventoryItemInterface } from '../../types/inventoryItem.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-inventory',
  templateUrl: './order-inventory.component.html',
  styleUrls: ['./order-inventory.component.css']
})
export class OrderInventoryComponent implements OnInit {
  currentUnitsOnHand: InventoryItemInterface[] = []
  postId: any;
  items!: any;

  constructor(
    private drinkService: DrinkService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getCurrentUnitsOnHand() {
    this.drinkService.getInventoryItems()
      .subscribe(res => {
        console.log('allCurrentItems: =====> ', res)


        for (let key in res) {
          console.log(key + ": " + res[key].unitsOnHand)
          if (res[key].unitsOnHand < 10) {
            console.log("less than 10")
            res[key].unitsOnHand = 10
          }
        }


    })
  }

  addAllUnits() {
    console.log('AddAllUnits called')

    const refillCount = 10;

    this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems', {id: 0, name: '', unitsOnHand: refillCount})
    .subscribe(data => this.items = data.unitsOnHand );
    // .subscribe((res) => {
    //   this.postId = res;
    // })

  //   async function fetchData() {

  //     const response = await fetch('http://localhost:3000/users/');
  //     const data = await response.json();

  //     data.forEach(obj: InventoryItemInterface => {
  //         Object.entries(obj).forEach(([key, value]) => {
  //             console.log(`${key} ${value}`);
  //             if (value < 10 ) {
  //               value = 10
  //             }
  //         });
  //         console.log('-------------------');
  //     });
  // }

  //   this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems')
  //     .subscribe((res: InventoryItemInterface) => {

  //       // const response = await fetch('http://localhost:8080/inventoryItems/');
  //       // const data = await response.json();

  //       res.forEach((res: InventoryItemInterface) => {
  //           Object.entries(res).forEach(([key, value]) => {
  //               console.log(`${key} ${value}`);
  //               if (value < 10) {
  //                 value = 10
  //               }
  //           });
  //           console.log('-------------------');
  //           console.log("original items: ", res)
  //       });
  //   }




    //   for (let keyName in JSON) {
    //     let value = json[keyName]
    //     if (value === '') {
    //         json[keyName] = keyName
    //     }
    // }
    // console.log("after changed items: ", this.items)


    // const item1Body = { id: 1, name: 'Coffee', unitsOnHand: refillCount };
    // this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/1', item1Body)
    // .subscribe(data => this.postId = data.id );

    // const item2Body = { id: 2, name: 'Decaf Coffee', unitsOnHand: refillCount };
    // this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/2', item2Body)
    // .subscribe(data => this.postId = data.id);

    // const item3Body = { id: 3, name: 'Sugar', unitsOnHand: refillCount };
    // this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/3', item3Body)
    // .subscribe(data => this.postId = data.id);

    // const item4Body = { id: 4, name: 'Cream', unitsOnHand: refillCount };
    // this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/4', item4Body)
    // .subscribe(data => this.postId = data.id);

    // const item5Body = { id: 5, name: 'Steamed Milk', unitsOnHand: refillCount };
    // this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/5', item5Body)
    // .subscribe(data => this.postId = data.id);

    // const item6Body = { id: 6, name: 'Foamed Milk', unitsOnHand: refillCount };
    // this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/6', item6Body)
    // .subscribe(data => this.postId = data.id);

    // const item7Body = { id: 7, name: 'Espresso', unitsOnHand: refillCount };
    // this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/7', item7Body)
    // .subscribe(data => this.postId = data.id);

    // const item8Body = { id: 8, name: 'Cocoa', unitsOnHand: refillCount };
    // this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/8', item8Body)
    // .subscribe(data => this.postId = data.id);

    // const item9Body = { id: 9, name: 'Whipped Cream', unitsOnHand: refillCount };
    // this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/9', item9Body)
    // .subscribe(data => this.postId = data.id);

    // this.ngOnInit();

    //)}

}}
