import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DisbursementStats } from './distribution-statement.component';
import { environment } from '../../../environments/environment';
import { DatePipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class DistributionService {
    private apiUrl = 'https://your-api-url.com/api/disbursement/stats'; // Replace with actual URL

    constructor(private http: HttpClient, private datePipe: DatePipe) { }

    getDisbursementStats(userId: string, fromDate: Date, toDate?: Date): Observable<DisbursementStats> {

        let params = new HttpParams().set('userId', userId.toString());

        const formattedFromDate = this.getFormattedDate(fromDate);
        const formattedToDate = this.getFormattedDate(toDate || fromDate);
        if (formattedFromDate) {
            params = params.set('fromDate', formattedFromDate);
        }

        if (formattedToDate) {
            params = params.set('toDate', formattedToDate);
        }
        return this.http.get<DisbursementStats>(`${environment.apiBaseUrl}/api/UserTransaction/user-report-stats`, { params });
        // return this.http.get<DisbursementStats>(this.apiUrl, { params });
    }

    getFormattedDate(date: Date): string | null {
        // Ensure the date is in UTC
        // const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        // console.log(utcDate);
        // Use DatePipe to format the UTC date
        return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
    }
}
