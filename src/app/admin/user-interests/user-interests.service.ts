import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { UserInterest } from "../../models/user-interest.model";
import { User } from "../../models/user.model";
import { DatePipe } from "@angular/common";


@Injectable()
export class UserInterestService {

    constructor(private http: HttpClient, private datePipe: DatePipe) { }

    getAllUserInterests() {
        return this.http.get(`${environment.apiBaseUrl}/api/UserInterest`);
    }

    updateUserInterest(id: string, user: UserInterest) {
        const payload = {
            ...user
        };
        return this.http.put(`${environment.apiBaseUrl}/api/UserInterest/${id}`, payload);
    }

    deleteUserInterest(id: string) {
        return this.http.delete(`${environment.apiBaseUrl}/api/UserInterest/${id}`);
    }

    saveUser(user: User) {
        const payload = {
            ...user,
            dateOfBirth: this.getFormattedDate(user.dateOfBirth),
        };
        return this.http.post(`${environment.apiBaseUrl}/api/User`, payload);
    }

    // Function to convert date to UTC and format it in 'yyyy-MM-dd' format
    getFormattedDate(date: Date): string | null {
        // Ensure the date is in UTC
        const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        console.log(utcDate);
        // Use DatePipe to format the UTC date
        return this.datePipe.transform(utcDate, 'yyyy-MM-dd');
    }
}