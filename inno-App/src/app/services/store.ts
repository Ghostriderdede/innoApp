import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/RX';
import { map, filter, reduce, tap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoreService {

    constructor() { }

    private isAdmin: boolean;

    public setAdmin() {
      this.isAdmin = true;
    }

    public getAdmin() : boolean {
      return this.isAdmin;
    }

    public deleteAdminStatus() {
      this.isAdmin = false;
    }

}
