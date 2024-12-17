import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInterest } from "../../models/user-interest.model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";


@Injectable()
export class UserInterestService {

    constructor(private http: HttpClient) { }

    getAllUserInterests() {
        return this.http.get(`${environment.apiBaseUrl}/api/UserInterest`);
    }
}