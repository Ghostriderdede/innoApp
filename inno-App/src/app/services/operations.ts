import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/RX';
import { map, filter, reduce, tap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {

    constructor() { }

    newGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}
