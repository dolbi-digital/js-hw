abstract class Cars {

    private model_name: string;
    
    constructor(model_name: string){
        this.model_name = model_name;
    }

    protected getInfo(): string {
        return "The model of the car is: " + this.model_name + "\n";
    }

    public year: number;
    public car_cost: number;
    public made_in: string;

    protected engine_capacity: number;
    protected horse_power: number;
    protected gasoline_consumption_per_100_km: number;
    protected acceleration_to_100_km: number;

    private vin_code: string;
    private owner: string;

    public getPrivateInfo(): string{
        return `Владелец ${ this.owner }, вин-код: ${ this.vin_code }`;
    }

    public setPrivateInfo(owner: string, vin_code: string){
        this.owner = owner;
        this.vin_code = vin_code;
    }
    
    protected abstract motto(): void;
}

class Honda extends Cars{
    constructor(model_name: string){
        super(model_name);
    }
    motto() {
        document.write("<br>Honda! The power of dreams!<br>");
    }
    public getHondaTechnicalInfo(){
        document.write(`<br>Объем двигателя: ${this.engine_capacity}, мощность: ${this.horse_power}, 
        расход бензина: ${this.gasoline_consumption_per_100_km}, разгон до 100 км/час: ${this.acceleration_to_100_km}<br>`);
    }
    public setHondaTechicalInfo(engine_capacity: number, horse_power: number, gasoline_consumption_per_100_km: number, acceleration_to_100_km: number){
        this.engine_capacity = engine_capacity;
        this.horse_power = horse_power;
        this. gasoline_consumption_per_100_km = gasoline_consumption_per_100_km;
        this.acceleration_to_100_km = acceleration_to_100_km;
    }
    public getInfo(): string{
        return super.getInfo();
    }
}

class Audi extends Cars{
    constructor(model_name: string){
        super(model_name);
    }

    private warranty: number;

    public setInfo(car_cost: number, warranty: number){
        this.car_cost = car_cost;
        this.warranty = warranty;
    }

    public getInfo(): string {
        let info: string = super.getInfo(); 
        return `${info}, стоимость авто: ${this.car_cost}, гарантия: ${this.warranty}<br>`;
    }
    motto() {
        document.write("<br>Audi! Vorsprung durch Technik!<br>");
    }
    
}

class Ford extends Cars{
    constructor(model_name: string){
        super(model_name);
    }

    private warranty: number;
    public lising: number;

    public setInfo(car_cost: number, warranty: number){
        this.car_cost = car_cost;
        this.warranty = warranty;
    }

    public getInfo(): string {
        let info: string = super.getInfo(); 
        return `${info}, стоимость авто: ${this.car_cost}, гарантия: ${this.warranty}, лизинг: ${this.lising}<br>`;
    }

    motto() {
        document.write("<br>Ford! Go Further!<br>");
    }
}

let accord: Honda = new Honda("Honda Accord Coupe");
accord.motto();
document.write(accord.getInfo());
accord.setPrivateInfo("Ivan Ivanov", "812348970sdafas");
console.log(accord.getPrivateInfo());
accord.car_cost = 50000;
accord.made_in = "USA";
accord.year = 2008;
document.write(`<br>Стоимость: ${accord.car_cost}, страна производитель: ${accord.made_in}, год выпуска: ${accord.year}`);
accord.setHondaTechicalInfo(3.5, 275, 15, 6.9);
accord.getHondaTechnicalInfo();

let civic: Honda = new Honda("Honda Civic Type-R");
civic.motto();
document.write(civic.getInfo());
civic.setPrivateInfo("Pavel Durov", "sdlfh2342334");
console.log(civic.getPrivateInfo());
civic.car_cost = 40000;
civic.made_in = "Japan";
civic.year = 2018;
document.write(`<br>Стоимость: ${civic.car_cost}, страна производитель: ${civic.made_in}, год выпуска: ${civic.year}`);
civic.setHondaTechicalInfo(2, 310, 13, 5.5);
civic.getHondaTechnicalInfo();

let a7: Audi = new Audi("Audi A7");
a7.setInfo(80000, 3);
a7.motto();
document.write(a7.getInfo());

let a8: Audi = new Audi("Audi A8");
a8.setInfo(160000, 5);
a8.motto();
document.write(a8.getInfo());

let mustang: Ford = new Ford("Ford Mustang Ecobust");
mustang.lising = 5;
mustang.setInfo(35000, 3);
mustang.motto();
document.write(mustang.getInfo());

let mustang_gt: Ford = new Ford("Ford Mustang GT");
mustang_gt.lising = 3;
mustang_gt.setInfo(50000, 5);
mustang_gt.motto();
document.write(mustang_gt.getInfo());
