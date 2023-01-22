import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
[x: string]: any;
drinkName: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onCreateDrink(drink: any) {
    // get the drink name and store in locaStorage
    localStorage.setItem('drinkName', drink);
    // Check to see if we are getting a value for 'drinkName' from locaStorage
    console.log("drinkName", localStorage.getItem('drinkName'));
    // open 'dispensed message' for user
    this.route.navigate(['/dispensed']);
  }

}
