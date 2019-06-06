var glass = prompt("Выберите стакан (маленький или большой)", "большой");
var marshmellow = prompt("Посыпать маршмеллоу? (да или нет)", "да");
var chocolate = prompt("Добавить шоколад? (да или нет)", "да"); 
var caramel = prompt("Добавить карамель? (да или нет)", "да"); 
var berries = prompt("Добавить ягоды? (да или нет)", "да"); 

function iceCreamCost(glass, marshmellow, chocolate, caramel, berries){
    var costofGlass;
    var costofMarshmellow;
    var costofChocolate;
    var costofCaramel;
    var costofBerries;

    if(glass=='большой'){
        costofGlass=25;
    }
    else costofGlass=10;

    if(marshmellow=='да'){
        costofMarshmellow=5;
    }
    else costofMarshmellow=0;

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

    var totalCost = costofGlass + costofMarshmellow + costofChocolate + costofCaramel + costofBerries;
    document.write("Ваш заказ: <br>Стакан: " + glass + " - " + costofGlass + " грн." +
    "<br>Маршмеллоу: " + marshmellow + " - " + costofMarshmellow + " грн." +
    "<br>Шоколад: " + chocolate + " - " + costofChocolate + " грн." +
    "<br>Карамель: " + caramel + " - " + costofCaramel + " грн." +
    "<br>Ягоды: " + berries + " - " + costofBerries + " грн." +
    "<br>Общая стоимость: " + totalCost + " грн.");
}

iceCreamCost(glass, marshmellow, chocolate, caramel, berries);