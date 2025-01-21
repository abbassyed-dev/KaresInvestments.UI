import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { DashboardStats } from "../../models/dashboard-stats.model";

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
}