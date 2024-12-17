import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInterest } from "../../models/user-interest.model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Portfolio } from "../../models/portfolio.model";
import { UserPortfolio } from "../../models/user-portfolio.model";


@Injectable()
export class UserPortfolioService {

    constructor(private http: HttpClient) { }

    getAllUserPortfolios() {
        return this.http.get(`${environment.apiBaseUrl}/api/UserPortfolio`);
    }

    saveUserPortfolio(userPortfolio: UserPortfolio) {
        return this.http.post(`${environment.apiBaseUrl}/api/UserPortfolio`, userPortfolio);
    }

    updateUserPortfolio(id: number, userPortfolio: UserPortfolio) {
        return this.http.put(`${environment.apiBaseUrl}/api/UserPortfolio/${id}`, userPortfolio);
    }

    getLookup() {
        return this.http.get<any>(`${environment.apiBaseUrl}/api/UserPortfolio/Lookup`);
    }
}
