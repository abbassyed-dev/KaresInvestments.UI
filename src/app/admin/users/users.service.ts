import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { User } from "../../models/user.model";
import { DatePipe } from "@angular/common";

@Injectable()
export class UsersService {

    constructor(private http: HttpClient, private datePipe: DatePipe) { }

    getAllUsers(fetchAdmin: string) {
        return this.http.get(`${environment.apiBaseUrl}/api/User/${fetchAdmin}`);
    }

    saveUser(user: User) {
        const payload = {
            ...user,
            dateOfBirth: this.getFormattedDate(user.dateOfBirth),
        };
        return this.http.post(`${environment.apiBaseUrl}/api/User`, payload);
    }

    updateUser(id: string, user: User) {
        const payload = {
            ...user,
            dateOfBirth: this.getFormattedDate(user.dateOfBirth),
        };
        return this.http.put(`${environment.apiBaseUrl}/api/User/${id}`, payload);
    }

    changePassword(payload: any) {
        return this.http.post<any>(`${environment.apiBaseUrl}/api/User/changePassword`, payload);
    }

    getUserById(userId: string) {
        return this.http.get(`${environment.apiBaseUrl}/api/User/${userId}`);
    }

    // Function to convert date to UTC and format it in 'yyyy-MM-dd' format
    getFormattedDate(date: Date): string | null {
        // Ensure the date is in UTC
        const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        console.log(utcDate);
        // Use DatePipe to format the UTC date
        return this.datePipe.transform(utcDate, 'yyyy-MM-dd');
    }

    deleteUser(id: string) {
        return this.http.delete(`${environment.apiBaseUrl}/api/User/${id}`);
    }

    getLookup() {
        return this.http.get<any>(`${environment.apiBaseUrl}/api/UserPortfolio/Lookup`);
    }

    checkEmailExists(email: string) {
        debugger;
        return this.http.get<boolean>(`${environment.apiBaseUrl}/api/User/check-email?email=${email}`);
    }

}
