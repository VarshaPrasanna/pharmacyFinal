export class User {

    _id: string;
    firstName: string;
    lastName: string;
    gender: string;
    username: string;
    email: string;
    password: string;
    isAdmin!: Boolean;
    accessToken: String;
    constructor() {
        this._id = '';
        this.firstName = '';
        this.lastName = '';
        this.gender = '';
        this.username = '';
        this.email = '';
        this.password = '';
        this.isAdmin;
        this.accessToken = '';
    }


}