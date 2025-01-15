import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AuthStateService } from '../../shared/services/auth-state.service';
import { UserTransactionsService } from './user-transactions.service';
import { UserTransaction } from '../../models/user-transaction.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-user-transactions',
    templateUrl: './user-transactions.component.html',
    styleUrl: './user-transactions.component.scss'
})
export class UserTransactionsComponent implements OnInit {

    userTransactions: UserTransaction[];
    userTransaction: UserTransaction = {} as UserTransaction;
    userTransactionDialog = false;
    submitted = false;
    lookupData: any;
    isEditMode = false;

    constructor(private authStateService: AuthStateService, private toastr: ToastrService,
        private dataService: UserTransactionsService) { }


    ngOnInit(): void {
        this.getLovs();
        this.getAllTransactions();
    }

    getLovs() {
        this.dataService.getLookup().subscribe((res: any) => {
            console.log(res);
            this.lookupData = res;
        });
    }

    setUserDetails(evt: any) {
        if (evt) {
            this.userTransaction.userId = evt.userId;
            this.userTransaction.email = evt.email;
            this.fetchUserPortfolios(this.userTransaction.userId, false);
        } else {
            this.toastr.error("User not selected.");
        }
    }

    fetchUserPortfolios(userId: string, editMode: boolean) {
        if (userId) {
            this.dataService.getUserPortfolios(userId).subscribe((res: any) => {
                console.log(res);
                this.lookupData["userPortfolios"] = res.portfolios;
                if (editMode) {
                    this.userTransactionDialog = true;
                    this.isEditMode = true;
                }
            })
        }
    }

    getAllTransactions() {
        this.dataService.getAllTransactions().subscribe((res: any) => {
            console.log(res);
            this.userTransactions = res;
        });
    }

    addTransaction() {
        this.userTransaction = {} as UserTransaction;
        this.submitted = false;
        this.userTransactionDialog = true;
    }

    hideDialog() {
        this.userTransactionDialog = false;
        this.submitted = false;
        this.isEditMode = false;
    }

    editTransaction(userTransaction: UserTransaction) {
        this.userTransaction = { ...userTransaction };
        if (this.userTransaction.userId) {
            this.fetchUserPortfolios(this.userTransaction.userId, true);
        }
        // this.userTransactionDialog = true;
        // this.isEditMode = true;
    }

    saveTransaction(form: any) {
        if (this.userTransaction.userTransactionId) {
            console.log("********Updating User Transaction***********", this.userTransaction);

            this.dataService.updateTransaction(this.userTransaction.userTransactionId, this.userTransaction).subscribe((res: any) => {
                this.userTransaction.ModifiedBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
                this.getAllTransactions();
            })
        } else {
            console.log("********Inserting User***********", this.userTransaction);
            this.userTransaction.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
            this.dataService.saveTransaction(this.userTransaction).subscribe((res: any) => {
                this.getAllTransactions();
            })
        }
        this.userTransactionDialog = false;
        this.userTransaction = {} as UserTransaction;

    }

}