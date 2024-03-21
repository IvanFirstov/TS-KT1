class User {
    static count: number = 0;

    protected _name: string;
    protected _login: string;
    protected _password: string;
    protected _grade: number;

    constructor(name: string, login: string, password: string, grade: number) {
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        User.count++;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get login(): string {
        return this._login;
    }

    get password(): string {
        return '********';
    }

    set password(value: string) {
        this._password = value;
    }

    show_info(): void {
        console.log(`Name: ${this._name}, Login: ${this._login}`);
    }

    eq(other: User): boolean {
        return this._grade === other._grade;
    }

    lt(other: User): boolean {
        return this._grade < other._grade;
    }

    gt(other: User): boolean {
        return this._grade > other._grade;
    }

    static getCount(): number {
        return User.count;
    }
}

class SuperUser extends User {
    static superCount: number = 0;

    private _role: string;

    constructor(name: string, login: string, password: string, role: string) {
        super(name, login, password, 0);
        this._role = role;
        SuperUser.superCount++;
    }

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    show_info(): void {
        console.log(`Name: ${this._name}, Login: ${this._login}, Role: ${this._role}`);
    }

    static getSuperCount(): number {
        return SuperUser.superCount;
    }
}


const user1 = new User("Alice", "alice123", "pass123", 10);
const user2 = new User("Bob", "bob456", "pass456", 15);

console.log(user1.name);
console.log(user1.login);
console.log(user1.password); 
user1.password = "newpass";  
console.log(user1.password);  

user1.show_info();  

console.log(user1.eq(user2));  
console.log(user1.lt(user2));  
console.log(user1.gt(user2));  

console.log(User.getCount());  

const superUser = new SuperUser("Admin", "admin", "adminpass", "Administrator");
superUser.show_info();  

console.log(SuperUser.getSuperCount());  
