export interface UserInterest {
    firstName: string;
    lastName: string;
    email: string;
    mobileNum: string;
    remarks: string;
    reqSubmittedOn?: Date;
    action?: string;
    userRequestId?: string;
}