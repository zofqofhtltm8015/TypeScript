interface TV
{
    turnOn();
    turnOff();
}

const myTV: TV ={
    turnOn()
    {   
        return true;

    },
    turnOff()
    {
        return false;
    }
}

function tryTurnOn(tv: TV)
{
    tv.turnOn();
}

tryTurnOn(myTV);



interface Cell{
    row: number;
    col: number;
    piece?: Piece;
}

interface Piece{
    move(from:Cell,to:Cell):boolean;
}

function createBorad()
{
    const cells: Cell[] =[];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({
                row: row,
                col: col
            })
            
        }
    }
    return cells;
}

const board = createBorad();

board[0].piece={
    move(from:Cell, to: Cell)
    {
        return true;
    }
}

interface signUp {
    email: string,
    id: string,
    password: string,
}

function ajaxSignUp(data: signUp)
{
    console.log(data);
}

const data ={
    email: '1',
    id: '1',
    password: '1',
}
ajaxSignUp(data);

