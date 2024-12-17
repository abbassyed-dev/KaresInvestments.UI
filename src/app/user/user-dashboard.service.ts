import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable()
export class UserDashboardService {

    constructor(private http: HttpClient) { }

    getUserTransactions(userId: string) {
        return this.http.get(`${environment.apiBaseUrl}/api/UserTransaction`);
    }
}