import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Midia } from './midia';

@Injectable({
    providedIn: 'root'
})

export class MidiaService {
    url:string = "http://localhost:3000"

    constructor(private http: HttpClient) { }

    getMidias(): Observable<Midia[]> {
        return this.http.get<Midia[]>(`${this.url}/midialist`);
    }

    getMidiaById(id: number): Observable<Midia> {
        return this.http.get<Midia>(`${this.url}/midialist/${id}`);
    }
}