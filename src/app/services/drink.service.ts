import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DrinkInterface } from '../types/drink.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InventoryItemInterface } from '../types/inventoryItem.interface';


@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  list: any;
  inventoryItems: InventoryItemInterface[] = [];


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient ) { }

  getDrinks(): Observable<DrinkInterface[]> {

    let DrinkRecipes = this.http
      .get<DrinkInterface[]>('http://localhost:8080/drinks')
      return DrinkRecipes;
    // .pipe(
    //   map((drinks: DrinkInterface[]) => {
    //     // console.log("returned drinks: ========> ", drinks)
    //     return drinks.map(
    //       drink => ({
    //         id: drink.id,
    //         name: drink.name,
    //         cost: drink.cost,
    //         units: drink.units
    //       }))
    //   })
    // )
  }

  getInventoryItems() {
    let RecipeItems = this.http
    .get<InventoryItemInterface[]>('http://localhost:8080/inventoryItems')
    return RecipeItems;
  }

  getById(id: number) {
    return this.http.get<InventoryItemInterface>(`http://localhost:8080/inventoryItems/${id}`);
  }

  getUnitsOnHandCount (id: number) {
    // get id for inventoryItem
    // get count from UnitsOnHand

    let idForItem = this.http.get<InventoryItemInterface>(`http://localhost:8080/inventoryItems/${id}`);
    console.log("itemReturned", idForItem)
  }

  getInventoryItemId (id: any) {
    console.log('id in view is: ' + id);
    this.http.get<any>('http://localhost:8080/inventoryItems' + id)
    .subscribe((res: any) => {
      this.list = res;
      console.log('data with respect to id is: ' + res);
    });
  }

  update(payload: InventoryItemInterface){
    this.http.put(`http://localhost:8080/inventoryItems/${payload.id}`,payload);
  }

  patch(payload: InventoryItemInterface){
    this.http.patch(`http://localhost:8080/inventoryItems/${payload.id}`,payload);
  }

  editInventoryItems(id: number, body:InventoryItemInterface) {
    let itemToEdit = this.http
      .put(`http://localhost:8080/inventoryItems/${id}`,
        JSON.stringify(body.unitsOnHand),
        this.httpOptions)
      .subscribe((res) => {
        console.log("edit items: ", res)
    })
    return itemToEdit;
  }

}


