interface Person{
    name: string;
    say(message: string): void;
}

interface Programmer {
    writeCode(requirment: string):string;
}

abstract class Korean1 implements Person{
    public abstract jumin: number;

    constructor(public name:string)
    {

    };

    say(msg: string)
    {
        console.log(msg);
    }

    abstract loveKimchi():void;

}


class Korean extends Korean1 implements Programmer{
    constructor(public name:string, public jumin:number)
    {
        super(name);
           
    }
     
    
    say(message: string): void {
        console.log(message);
    }

    writeCode(requirment: string)
    {
        console.log(requirment);
        return requirment+'....';
    }

    loveKimchi()
    {
        console.log('love~ kimchi~');
    }


}

const jay = new Korean('jay',12341441);

jay.writeCode('It\'s working on my  machine');

