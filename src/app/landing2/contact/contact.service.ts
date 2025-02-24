import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterest } from "../../models/user-interest.model";
import { environment } from "../../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private http: HttpClient) { }

    saveUserInterest(data: UserInterest): Observable<UserInterest> {
        return this.http.post<UserInterest>(`${environment.apiBaseUrl}/api/UserInterest`, data);
    }
}