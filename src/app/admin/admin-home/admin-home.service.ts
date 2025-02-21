import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { DashboardStats } from "../../models/dashboard-stats.model";
import { UserStats } from "../../models/user-stats.model";

@Injectable()
export class AdminHomeService {

    constructor(private http: HttpClient) { }

    getAdminDashboardStats(): Observable<DashboardStats> {
        return this.http.get<DashboardStats>(`${environment.apiBaseUrl}/api/AdminDashboard/dashboard-stats`);
    }

    getAdminDashboardGraphData() {
        return this.http.get<DashboardStats>(`${environment.apiBaseUrl}/api/AdminDashboard/user-transactions-graph`);
    }

    getAdminDashboardPieChartData() {
        return this.http.get<DashboardStats>(`${environment.apiBaseUrl}/api/AdminDashboard/inv-port-dist`);
    }

    getOverAllInvestmentStats(userId: string | null = null) {
        // return this.http.get<UserStats>(`${environment.apiBaseUrl}/api/User/user-stats?userId=${userId}`);
        return this.http.get<UserStats>(`${environment.apiBaseUrl}/api/User/user-stats`, {
            params: userId ? { userId } : {}  // If userId is null, send an empty params object
        });
    }
}