import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { UserStats } from "../models/user-stats.model";

@Injectable()
export class UserDashboardService {

    constructor(private http: HttpClient) { }

    getUserTransactions(userId: string) {
        return this.http.get(`${environment.apiBaseUrl}/api/UserTransaction/${userId}`);
    }

    getUserDashboardStats(userId: string) {
        return this.http.get<UserStats>(`${environment.apiBaseUrl}/api/User/user-stats?userId=${userId}`);
    }
}