let glass: string = prompt("Выберите стакан (маленький или большой)", "большой");
let chocolate: string = prompt("Добавить шоколад? (да или нет)", "да"); 
let caramel: string = prompt("Добавить карамель? (да или нет)", "да"); 
let berries: string = prompt("Добавить ягоды? (да или нет)", "да"); 
let marshmellow: string = prompt("Посыпать маршмеллоу? (да или нет)", "да");

function iceCreamCost(glass: string, chocolate: string, caramel: string, berries: string, marshmellow?: string): void{
    let costofGlass: number;
    let costofMarshmellow: number;
    let costofChocolate: number;
    let costofCaramel: number;
    let costofBerries: number;

    if(glass=='большой'){
        costofGlass=25;
    }
    else costofGlass=10;

    if(chocolate=='да'){
        costofChocolate=5;
    }
    else costofChocolate=0;

    if(caramel=='да'){
        costofCaramel=6;
    }
    else costofCaramel=0;

    if(berries=='да'){
        costofBerries=10;
    }
    else costofBerries=0;

    if(marshmellow=='да'){
        costofMarshmellow=5;
    }
    else costofMarshmellow=0;

    let totalCost: number = costofGlass + costofMarshmellow + costofChocolate + costofCaramel + costofBerries;
    document.write("Ваш заказ: <br>Стакан: " + glass + " - " + costofGlass + " грн." +
    "<br>Шоколад: " + chocolate + " - " + costofChocolate + " грн." +
    "<br>Карамель: " + caramel + " - " + costofCaramel + " грн." +
    "<br>Ягоды: " + berries + " - " + costofBerries + " грн." +
    "<br>Маршмеллоу: " + marshmellow + " - " + costofMarshmellow + " грн." +
    "<br>Общая стоимость: " + totalCost + " грн.");
}

iceCreamCost(glass, chocolate, caramel, berries, marshmellow);