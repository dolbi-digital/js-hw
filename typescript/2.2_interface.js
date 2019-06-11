var Cat = /** @class */ (function () {
    function Cat() {
        this.name = "Murzik";
        this.weight = 5;
    }
    Cat.prototype.sound = function () {
        document.write(this.name + " mur mur mur<br>");
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.name = "Vorona";
        this.weight = 1;
        this.fly = true;
        this.swim = false;
    }
    Bird.prototype.sound = function () {
        document.write(this.name + " kar kar kar fly: " + this.fly + " swim: " + this.swim + "<br>");
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
        this.name = "Salmon";
        this.weight = 0.5;
        this.fly = false;
        this.swim = true;
    }
    Fish.prototype.sound = function () {
        document.write(this.name + " kar kar kar fly: " + this.fly + " swim: " + this.swim + "<br>");
    };
    return Fish;
}());
var cat = new Cat();
cat.sound();
var cat2 = new Cat();
cat2.name = "Vladimir";
cat2.sound();
var bird = new Bird();
bird.sound();
var fish = new Fish();
fish.sound();
