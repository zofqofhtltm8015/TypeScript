interface DB<T>
{
    add(v:T):void;
    get():T;
}

class D<T> implements DB<T>
{
    add(v: T)
    {
        throw new Error("Method not implemented.");
    }
    get() : T
    {
        throw new Error("Method not implemented.");

    }
}

interface JSONSerialier
{
    serialize(): string;
}


class LocalDB<T extends JSONSerialier> implements DB<T>{
    constructor(private localStorageKey: string)
    {

    }

    add(v: T)
    {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));

    }
    get() : T
    {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface Veigtable
{
    v: string;
}

interface Meat
{
    m: string;
}

interface Cart2<T>
{
    getItem():T extends Veigtable ? Veigtable : Meat
}

const cart1: Cart2<Veigtable>={
    getItem()
    {
        return{v:''}
    }
}

cart1.getItem()