import { Component, OnInit, Input } from '@angular/core';
import { AuthStateService } from '../../shared/services/auth-state.service';
import { UserTransactionsService } from './user-transactions.service';
import { UserTransaction } from '../../models/user-transaction.model';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user.model';
import { ConfirmationService } from 'primeng/api';

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

    @Input() userFromContext: User = {} as User;

    userPortfolios: any[] = [];
    filteredCategories: any[] = [];

    selectedPortfolio = 0; // Holds the selected value

    constructor(private authStateService: AuthStateService, private toastr: ToastrService,
        private confirmationService: ConfirmationService,
        private dataService: UserTransactionsService) { }


    ngOnInit(): void {
        console.log('From T:', this.userFromContext.firstName, this.userFromContext.userId);
        this.getLovs();
        if (!this.userFromContext.userId) {
            this.getAllTransactions();
        } else {
            this.getAllTransactionByUser();
        }
    }

    getLovs() {
        this.dataService.getLookup().subscribe((res: any) => {
            console.log(res);
            this.lookupData = res;
        });
    }

    filterCategories() {
        if (!this.userTransaction.transactionTypeId) {
            this.filteredCategories = [];
            return;
        }

        this.filteredCategories = this.lookupData.transactionCategories.filter(
            (cat: any) => cat.transactionTypeId === this.userTransaction.transactionTypeId
        );

        // Reset selected category if it's not in the filtered list
        // if (!this.filteredCategories.some(cat => cat.transactionCatgId === this.userTransaction.transactionCategoryId)) {
        //     this.userTransaction.transactionCategoryId = null;
        // }
    }

    setUserDetails(evt: any) {
        if (evt) {
            this.userTransaction.userId = evt.userId;
            this.userFromContext.userId = evt.userId;
            this.userTransaction.email = evt.email;
            this.fetchUserPortfolios(this.userTransaction.userId, false);
            this.getAllTransactionByUser();
        } else {
            this.getAllTransactions();
            this.userFromContext = {} as User;
        }
    }

    fetchUserPortfolios(userId: string, editMode: boolean) {
        if (userId) {
            this.dataService.getUserPortfolios(userId).subscribe((res: any) => {
                console.log(res.portfolios);
                this.userPortfolios = res.portfolios;
                this.lookupData["userPortfolios"] = res.portfolios;
                //this.cdr.detectChanges();
                //console.log('rb', this.userPortfolios);
                if (editMode) {
                    this.userTransactionDialog = true;
                    this.isEditMode = true;
                }
            })
        }
    }

    fetchUserTransactions(portfolioId: number) {
        this.getAllTransactionByUser();
    }

    getAllTransactions() {
        this.dataService.getAllTransactions().subscribe((res: any) => {
            console.log(res);
            this.userTransactions = res;
        });
    }

    addTransaction() {
        this.userTransaction = {} as UserTransaction;
        if (this.userFromContext.userId) {
            this.userTransaction.userId = this.userFromContext.userId;
        }
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
        this.userTransaction.transactionDate = new Date(userTransaction.transactionDate);
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
                // this.getAllTransactions();
                if (!this.userFromContext.userId) {
                    this.getAllTransactions();
                } else {
                    this.getAllTransactionByUser();
                }
            })
        }
        this.userTransactionDialog = false;
        this.userTransaction = {} as UserTransaction;
    }

    getAllTransactionByUser() {
        if (this.userFromContext.userId) {
            console.log(this.userFromContext.userId);
            this.dataService.getAllTransactionsByUser(this.userFromContext.userId, this.selectedPortfolio).subscribe((res: any) => {
                console.log(res);
                this.userTransactions = res;
            });
        }
    }

    deleteTransaction(transaction: UserTransaction) {
        if (transaction.userTransactionId) {
            this.dataService.deleteTransaction(transaction.userTransactionId).subscribe((res: any) => {
                if (!this.userFromContext.userId) {
                    this.getAllTransactions();
                } else {
                    this.getAllTransactionByUser();
                }
                this.toastr.success("User Details deleted Successfully");
            },
                (err) => {
                    console.error('Error Deleting User', err);
                    this.toastr.error("Not able to Delete. Try Again");
                });
        }
    }

    showConfirmation(userTransaction: UserTransaction) {
        this.confirmationService.confirm({
            message: "Are you sure you want to delete this Transaction ?",
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptButtonStyleClass: "p-button-danger",
            rejectButtonStyleClass: "p-button-text p-button-text",
            accept: () => {
                this.deleteTransaction(userTransaction);
            }
        });
    }
}