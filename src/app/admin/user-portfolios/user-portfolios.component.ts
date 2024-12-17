import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../models/portfolio.model';
import { UserPortfolioService } from './user-portfolios.service';
import { UserPortfolio } from '../../models/user-portfolio.model';
import { AuthStateService } from '../../shared/services/auth-state.service';

@Component({
    selector: 'app-user-portfolios',
    templateUrl: './user-portfolios.component.html',
    styleUrls: ['./user-portfolios.component.scss']
})
export class UserPortfoliosComponent implements OnInit {

    userPortfolios: UserPortfolio[];
    userPortfolio: UserPortfolio = {} as UserPortfolio;
    userPortfolioDialog: boolean = false;
    submitted: boolean = false;
    lookupData: any;
    isEditMode: boolean = false;

    constructor(private dataService: UserPortfolioService,
        private authStateService: AuthStateService) { }

    ngOnInit(): void {
        this.getLovs();
        this.getAllUserPortfolios();
    }

    getLovs() {
        this.dataService.getLookup().subscribe((res: any) => {
            console.log(res);
            this.lookupData = res;
        });
    }

    getAllUserPortfolios() {
        this.dataService.getAllUserPortfolios().subscribe((res: any) => {
            console.log(res);
            this.userPortfolios = res;
        });
    }

    addUserPortfolio() {
        this.userPortfolio = {} as UserPortfolio;
        this.submitted = false;
        this.userPortfolioDialog = true;
    }

    hideDialog() {
        this.userPortfolioDialog = false;
        this.submitted = false;
        this.isEditMode = false;
    }

    editUserPortfolio(userPortfolio: UserPortfolio) {
        this.userPortfolio = { ...userPortfolio };
        this.userPortfolioDialog = true;
        this.isEditMode = true;
    }

    saveUserPortfolio(form: any) {
        if (this.userPortfolio.userPortfolioId) {
            console.log("********Updating UserPortfolio***********", this.userPortfolio);

            this.dataService.updateUserPortfolio(this.userPortfolio.userPortfolioId, this.userPortfolio).subscribe((res: any) => {
                this.userPortfolio.ModifiedBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
                this.getAllUserPortfolios();
            })
        } else {
            console.log("********Inserting User***********", this.userPortfolio);
            this.userPortfolio.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
            this.dataService.saveUserPortfolio(this.userPortfolio).subscribe((res: any) => {
                this.getAllUserPortfolios();
            })
        }
        this.userPortfolioDialog = false;
        this.userPortfolio = {} as UserPortfolio;

    }

    setUserDetails(evt: any) {
        this.userPortfolio.userId = evt.userId;
    }
}