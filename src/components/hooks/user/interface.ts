export interface IProfile {
    age: number;
    country: string;
    firstName: string;
    lastName: string;
    state: string;
}

export interface IUserResponse extends IProfile {
    id: string;
    createdAt: string;
}