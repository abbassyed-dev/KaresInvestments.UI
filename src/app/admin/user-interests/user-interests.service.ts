import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";


@Injectable()
export class UserInterestService {

    constructor(private http: HttpClient) { }

    getAllUserInterests() {
        return this.http.get(`${environment.apiBaseUrl}/api/UserInterest`);
    }
}