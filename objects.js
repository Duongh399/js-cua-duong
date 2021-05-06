class getCar{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
// khoi tao method (method la funtion)
     date() {
        //phai dung let trong funtion thay vi var
        let date = new Date;
        return date.getFullYear + this.year;
    }
      
}
let car1 = new getCar();
let car2 = new getCar();

let dientich = class {
    constructor(dai,rong) {
        this.dai=dai;
        this.rong=rong;
    }
}

let dientich2 = class {
    constructor(dai,rong) {
        this.dai=dai;
        this.rong=rong;
    }
    laydt(){
        return this.tinhdientich();
    }

    tinhdientich(){
        return this.dai*this.rong;
    }

    
}

 class lap{
    constructor(...sides) {
        this.sides = sides;
    }
    *getSides(){
        for (const side of this.sides) {
            yield side;
        }
    }
}

//generator method in class
function* ketiep(i){
    yield i;
    yield i+10;
    yield i+20;
}

//static method
class poin{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static display = "kkhhkhkhkhh";
    static diatance(a,b){
        const dx = a.x - b.x;
        const dy = a.y -b.y;
        return Math.hypot(dx,dy);
    }
}

// prototype vs static
class Animal{
    constructor() {
        this.name = name;
    }
        speak(){
            console.log(this.name);
        }

        static eat(){
            return this;
        }
}

class Dog extends Animal{
    constructor(name) {
        super(name);
    }
    speak(){
        console.log(this.name);
    }
}

let news = new Dog('agk');
news.speak();
// obj = new Animal;
// let speaas = Animal.prototype.speaks=function () {
//     return 'tiger';
// };
// console.log(obj.speaks());



// let p1 = new poin(5,5);
// let p2 = new poin(10,10);

// console.log(poin.diatance(p1,p2));
// const gen = ketiep(10);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
//let dt  = new dientich2//(10,10);
// khoi tao class phai de o ngoai class

// const laps = new lap(1,2,3,4,5);
// console.log([...laps.getSides()]);
// document.getElementById("app").innerHTML=[...laps.getSides()];

//constructor
//extents
//class private
//static
// public class
//promises vs then
// asyn await
//DOM
