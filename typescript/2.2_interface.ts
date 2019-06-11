interface Animals {
    name: string;
    weight: number; 
    fly?: boolean;
    swim?: boolean;
    sound(): void;
}

class Cat implements Animals{
    name = "Murzik";    
    weight = 5;
    sound(): void {
        document.write(this.name + " mur mur mur<br>");
    }
}

class Bird implements Animals{
    name = "Vorona";    
    weight = 1;
    fly = true;
    swim = false;
    sound(): void {
        document.write(this.name + " kar kar kar fly: " + this.fly + " swim: " + this.swim + "<br>");
    }
}

class Fish implements Animals{
    name = "Salmon";    
    weight = 0.5;
    fly = false;
    swim = true;
    sound(): void {
        document.write(this.name + " kar kar kar fly: " + this.fly + " swim: " + this.swim + "<br>");
    }
}

let cat: Cat = new Cat();
cat.sound();

let cat2 = new Cat();
cat2.name = "Vladimir";
cat2.sound();

let bird: Bird = new Bird();
bird.sound();

let fish: Fish = new Fish();
fish.sound();