import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { InventoryItem } from './inventoryItem.model';

@Injectable({ providedIn: 'root' })
export class InventoryItemService {
  private storageInitialised = false;

  constructor(private storage: Storage) {}

  async getInventoryItems(): Promise<InventoryItem[]> {
    if (!this.storageInitialised) await this.storage.create();

    return (await this.storage.get('inventoryItems')) || [];
  }

  async saveInventoryItems(inventoryItems: InventoryItem[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('inventoryItems', inventoryItems);
  }
}
