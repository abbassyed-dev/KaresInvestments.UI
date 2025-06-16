import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { UserTransaction } from "../../models/user-transaction.model";
import { DatePipe } from "@angular/common";


@Injectable()
export class UserTransactionsService {

    constructor(private http: HttpClient, private datePipe: DatePipe) { }

    getAllTransactions() {
        return this.http.get(`${environment.apiBaseUrl}/api/UserTransaction`);
    }

    saveTransaction(userTransaction: UserTransaction) {
        const payload = {
            ...userTransaction,
            transactionDate: this.getFormattedDate(userTransaction.transactionDate),
        };
        return this.http.post(`${environment.apiBaseUrl}/api/UserTransaction`, payload);
    }

    updateTransaction(id: string, userTransaction: UserTransaction) {
        const payload = {
            ...userTransaction,
            transactionDate: this.getFormattedDate(userTransaction.transactionDate),
        };
        return this.http.put(`${environment.apiBaseUrl}/api/UserTransaction/${id}`, payload);
    }

    getLookup() {
        return this.http.get<any>(`${environment.apiBaseUrl}/api/UserTransaction/Lookup`);
    }

    getUserPortfolios(userId: string) {
        return this.http.get(`${environment.apiBaseUrl}/api/UserPortfolio/${userId}`);
    }

    getAllTransactionsByUser(userId: string, selectedPortfolio: number) {
        return this.http.get(`${environment.apiBaseUrl}/api/UserTransaction/${userId}/${selectedPortfolio}`);
    }

    deleteTransaction(id: string) {
        return this.http.delete(`${environment.apiBaseUrl}/api/UserTransaction/${id}`);
    }

    getFormattedDate(date: Date): string | null {
        // Ensure the date is in UTC
        // const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        // console.log(utcDate);
        // Use DatePipe to format the UTC date
        return this.datePipe.transform(date, 'yyyy-MM-dd');
    }
}
