import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ConfigurationService {
    private apiUrl = 'https://your-api.com/api/lookup'; // Adjust your API endpoint

    constructor(private http: HttpClient) { }

    getTableData(tableName: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/${tableName}`);
    }

    addRecord(tableName: string, record: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/${tableName}`, record);
    }

    updateRecord(tableName: string, record: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${tableName}/${record.id}`, record);
    }

    deleteRecord(tableName: string, id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${tableName}/${id}`);
    }
}
