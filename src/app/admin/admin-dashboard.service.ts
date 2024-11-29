import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class AdminDashboardService {

    constructor(private http: HttpClient) { }


}