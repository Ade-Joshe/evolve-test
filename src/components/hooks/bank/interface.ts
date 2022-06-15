export interface IBankAccount {
    accountName: string;
    accountNumber: string;
    bankName: string;
};

export interface IBankAccountResponse extends IBankAccount {
    createdAt: string;
    id: string;
}