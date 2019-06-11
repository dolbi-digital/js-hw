var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cars = /** @class */ (function () {
    function Cars(model_name) {
        this.model_name = model_name;
    }
    Cars.prototype.getInfo = function () {
        return "The model of the car is: " + this.model_name + "\n";
    };
    Cars.prototype.getPrivateInfo = function () {
        return "\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 " + this.owner + ", \u0432\u0438\u043D-\u043A\u043E\u0434: " + this.vin_code;
    };
    Cars.prototype.setPrivateInfo = function (owner, vin_code) {
        this.owner = owner;
        this.vin_code = vin_code;
    };
    return Cars;
}());
var Honda = /** @class */ (function (_super) {
    __extends(Honda, _super);
    function Honda(model_name) {
        return _super.call(this, model_name) || this;
    }
    Honda.prototype.motto = function () {
        document.write("<br>Honda! The power of dreams!<br>");
    };
    Honda.prototype.getHondaTechnicalInfo = function () {
        document.write("<br>\u041E\u0431\u044A\u0435\u043C \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: " + this.engine_capacity + ", \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C: " + this.horse_power + ", \n        \u0440\u0430\u0441\u0445\u043E\u0434 \u0431\u0435\u043D\u0437\u0438\u043D\u0430: " + this.gasoline_consumption_per_100_km + ", \u0440\u0430\u0437\u0433\u043E\u043D \u0434\u043E 100 \u043A\u043C/\u0447\u0430\u0441: " + this.acceleration_to_100_km + "<br>");
    };
    Honda.prototype.setHondaTechicalInfo = function (engine_capacity, horse_power, gasoline_consumption_per_100_km, acceleration_to_100_km) {
        this.engine_capacity = engine_capacity;
        this.horse_power = horse_power;
        this.gasoline_consumption_per_100_km = gasoline_consumption_per_100_km;
        this.acceleration_to_100_km = acceleration_to_100_km;
    };
    Honda.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this);
    };
    return Honda;
}(Cars));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(model_name) {
        return _super.call(this, model_name) || this;
    }
    Audi.prototype.setInfo = function (car_cost, warranty) {
        this.car_cost = car_cost;
        this.warranty = warranty;
    };
    Audi.prototype.getInfo = function () {
        var info = _super.prototype.getInfo.call(this);
        return info + ", \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0432\u0442\u043E: " + this.car_cost + ", \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044F: " + this.warranty + "<br>";
    };
    Audi.prototype.motto = function () {
        document.write("<br>Audi! Vorsprung durch Technik!<br>");
    };
    return Audi;
}(Cars));
var Ford = /** @class */ (function (_super) {
    __extends(Ford, _super);
    function Ford(model_name) {
        return _super.call(this, model_name) || this;
    }
    Ford.prototype.setInfo = function (car_cost, warranty) {
        this.car_cost = car_cost;
        this.warranty = warranty;
    };
    Ford.prototype.getInfo = function () {
        var info = _super.prototype.getInfo.call(this);
        return info + ", \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0432\u0442\u043E: " + this.car_cost + ", \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044F: " + this.warranty + ", \u043B\u0438\u0437\u0438\u043D\u0433: " + this.lising + "<br>";
    };
    Ford.prototype.motto = function () {
        document.write("<br>Ford! Go Further!<br>");
    };
    return Ford;
}(Cars));
var accord = new Honda("Honda Accord Coupe");
accord.motto();
document.write(accord.getInfo());
accord.setPrivateInfo("Ivan Ivanov", "812348970sdafas");
console.log(accord.getPrivateInfo());
accord.car_cost = 50000;
accord.made_in = "USA";
accord.year = 2008;
document.write("<br>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + accord.car_cost + ", \u0441\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: " + accord.made_in + ", \u0433\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: " + accord.year);
accord.setHondaTechicalInfo(3.5, 275, 15, 6.9);
accord.getHondaTechnicalInfo();
var civic = new Honda("Honda Civic Type-R");
civic.motto();
document.write(civic.getInfo());
civic.setPrivateInfo("Pavel Durov", "sdlfh2342334");
console.log(civic.getPrivateInfo());
civic.car_cost = 40000;
civic.made_in = "Japan";
civic.year = 2018;
document.write("<br>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + civic.car_cost + ", \u0441\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: " + civic.made_in + ", \u0433\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: " + civic.year);
civic.setHondaTechicalInfo(2, 310, 13, 5.5);
civic.getHondaTechnicalInfo();
var a7 = new Audi("Audi A7");
a7.setInfo(80000, 3);
a7.motto();
document.write(a7.getInfo());
var a8 = new Audi("Audi A8");
a8.setInfo(160000, 5);
a8.motto();
document.write(a8.getInfo());
var mustang = new Ford("Ford Mustang Ecobust");
mustang.lising = 5;
mustang.setInfo(80000, 3);
mustang.motto();
document.write(mustang.getInfo());
var mustang_gt = new Ford("Ford Mustang GT");
mustang_gt.lising = 3;
mustang_gt.setInfo(160000, 5);
mustang_gt.motto();
document.write(mustang_gt.getInfo());
