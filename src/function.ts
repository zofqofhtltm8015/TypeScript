function add(x: number, y:number)
{
        return x+y;
}
const result = add(1,2);

function buildUserInfo(name="-", email="-") // name: string = "-" 와 같은 뜻이다.
{
    return{ name,email};
}

const add2 = (a:number,b:number) : number => a+b; // 매개변수를 모두 number로 받고 return값도 number로 한다는 함수

interface Storage{
    
}
/*

interface Storage{};
interface ColdStorage{};
function store(type: "통조림"):Storage; //  매개변수로 "통조림" 이 왔으면 Storage를 반환해야함
function store(type: "아이스크림"):ColdStorage;

 위 두함수는 Body={}가 없고 타입만 정의한 것을 함수 시그니쳐라고 한다. 
동일한 이름에 반환형만 다르게 하는 것을 오버로드 시그니쳐라고 한다.
 위 함수는 오버로드 시그니쳐이다.
 */



interface Storage{
    a:string
};
interface ColdStorage{
    b:string
};

function store(type: "통조림"):Storage;
function store(type: "아이스크림"):ColdStorage;
function store(type: "통조림" | "아이스크림")
{
    
    if(type==="통조림")
    {
        return {a:"통조림"};
    } else if(type==="아이스크림")
    {
        return {b:"아이스크림"}
    }else{
        throw new Error('unSupported type');
    }
}

const s = store('아이스크림');
