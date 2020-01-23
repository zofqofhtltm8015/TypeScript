interface User {
    name: string;
}

interface Action{
    do(): void;
}

type UserAction = User&Action;

function createUserAction(): UserAction{
    return {
        do() {},
        name: ''
    }
}

type StringOrNumber = string | Number;

type arr<T> = T[];

type P<T> = Promise<T>;

type User2 = {
    name: string;
    login(): boolean;
}

class  UserImpl {
    name: string;
    login(): boolean{
        throw new Error("Method not implemented.");
    }
}

type UserState = "PENDING" | "APPROVED" | "REJECTED"


function checkUser(user: User2):UserState{
    if(user.login())
    {
        return"APPROVED";
    } else{
        return "REJECTED";
    }
}