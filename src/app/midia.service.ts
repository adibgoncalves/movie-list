import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Midia } from './midia';

@Injectable({
    providedIn: 'root'
})

export class MidiaService {
    url:string = "http://localhost:8080"

    constructor(private http: HttpClient) { }

    getMidias(): Observable<Midia[]> {
        return this.http.get<Midia[]>(`${this.url}/midia`);
    }

    getMidiaById(id: number): Observable<Midia> {
        return this.http.get<Midia>(`${this.url}/midia/${id}`);
    }

    createMidia(midia: Midia): Observable<Midia> {
        return this.http.post<Midia>(`${this.url}/midia`, midia);
    }

    
    updateMidia(midia: Midia): Observable<Midia> {
        return this.http.put<Midia>(`${this.url}/midia/${midia.id}`, midia);
    }

    deleteMidiaById(id: number): Observable<Midia> {
        return this.http.delete<Midia>(`${this.url}/midia/${id}`)
    }
}