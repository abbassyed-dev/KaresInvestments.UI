import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { UserTransaction } from "../../models/user-transaction.model";


@Injectable()
export class UserTransactionsService {

    constructor(private http: HttpClient) { }

    getAllTransactions() {
        return this.http.get(`${environment.apiBaseUrl}/api/UserTransaction`);
    }

    saveTransaction(userTransaction: UserTransaction) {
        return this.http.post(`${environment.apiBaseUrl}/api/UserTransaction`, userTransaction);
    }

    updateTransaction(id: string, userTransaction: UserTransaction) {
        return this.http.put(`${environment.apiBaseUrl}/api/UserTransaction/${id}`, userTransaction);
    }

    getLookup() {
        return this.http.get<any>(`${environment.apiBaseUrl}/api/UserTransaction/Lookup`);
    }

    getUserPortfolios(userId: string) {
        return this.http.get(`${environment.apiBaseUrl}/api/UserPortfolio/${userId}`);
    }
}
