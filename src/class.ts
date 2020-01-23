interface User{
    name: string;
    
}

interface Product
{
    id:string;
    price: number;
}

class Cart{
    private store: object;
    constructor(public user: User)
    {
        this.user = user;
        this.store = {};
    }
    put(id: string,product: Product)
    {
        this.store[id] = product;
    }
    get(id: string)
    {
        return this.store[id];
    }
}


class PromotionCart extends Cart
{
    constructor(user: User)
    {
        super(user);
        this.user = user;
    }
}

const cartJohn = new Cart({name:'john'})
const cartJay = new Cart({name:'jay'})
const cartJohn1 = new PromotionCart({name:'john'})

cartJohn1.get
