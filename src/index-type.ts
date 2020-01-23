    interface Props {
        name: string;
        [key:string]:string;
    
    } 

let keys: keyof Props;

interface User{
    name: string;
    age: number;
    hello(msg:string): void;

}

let keysofUser: keyof User;
keysofUser="name";
console.log(keysofUser = "age");


let helloMethod: User["hello"];
