import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { User } from "../../models/user.model";

@Injectable()
export class UsersService {

    constructor(private http: HttpClient) { }

    getAllUsers(fetchAdmin: string) {
        return this.http.get(`${environment.apiBaseUrl}/api/User/${fetchAdmin}`);
    }

    saveUser(user: User) {
        return this.http.post(`${environment.apiBaseUrl}/api/User`, user);
    }

    updateUser(id: string, user: User) {
        return this.http.put(`${environment.apiBaseUrl}/api/User/${id}`, user);
    }

    changePassword(payload: any) {
        return this.http.post<any>(`${environment.apiBaseUrl}/api/User/changePassword`, payload);
    }

    getUserById(id: string) {
        return this.http.get(`${environment.apiBaseUrl}/api/User/${id}`);
    }

}
