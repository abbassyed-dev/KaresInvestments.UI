export class UserTransaction {
    userTransactionId: string;
    portfolioId: number;
    userId: string;
    portfolioName: string;
    userName: string;
    email: string;
    transactionDate?: Date;
    transactionType?: string;
    transactionCategory?: string;
    paymentMode?: string;
    transactionTypeId: number;
    transactionCategoryId: number;
    paymentModeId: number;
    amount: number;
    createdBy: string;
    createdOn: Date;
    ModifiedOn: Date;
    ModifiedBy: string;
    remarks: string;
}