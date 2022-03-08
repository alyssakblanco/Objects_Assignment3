console.log("working 4");

//class
class Item {
    constructor(name, price, qty){
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.total = price * qty;
    }
    show(){
        return this.name + " qty: " + this.qty + " total: " + this.total;
    }
}

hotdog = new Item("hotdog", 4, 0);
fries = new Item("fries", 3.50, 0);
soda = new Item("soda", 1.50, 0);
sauerkraut = new Item("sauerkraut", 1, 0);


document.getElementById("hdqty").innerText = hotdog.qty;

document.getElementById("fqty").innerText = fries.qty;

document.getElementById("sqty").innerText = soda.qty;

document.getElementById("skqty").innerText = sauerkraut.qty;

//adding and subtracting qty of each item
let add = document.getElementsByClassName("add");
let subtract = document.getElementsByClassName("subtract");

add[0].addEventListener("click", addHotdog);
add[1].addEventListener("click", addFries);
add[2].addEventListener("click", addSoda);
add[3].addEventListener("click", addSk);

subtract[0].addEventListener("click", subHotdog);
subtract[1].addEventListener("click", subFries);
subtract[2].addEventListener("click", subSoda);
subtract[3].addEventListener("click", subSk);

function addHotdog(){
    hotdog.qty++;
    document.getElementById("hdqty").innerText = hotdog.qty;
}
function subHotdog(){
    hotdog.qty--;
    if(hotdog.qty < 0){ hotdog.qty=0; }
    document.getElementById("hotdog.qty").innerText = hotdog.qty;
}

function addFries(){
    fries.qty++;
    document.getElementById("fqty").innerText = fries.qty;
}
function subFries(){
    fries.qty--;
    if(fries.qty < 0){ fries.qty=0; }
    document.getElementById("fqty").innerText = fries.qty;
}

function addSoda(){
    soda.qty++;
    document.getElementById("sqty").innerText = soda.qty;
}
function subSoda(){
    soda.qty--;
    if(soda.qty < 0){ soda.qty=0; }
    document.getElementById("sqty").innerText = soda.qty;
}

function addSk(){
    sauerkraut.qty++;
    document.getElementById("skqty").innerText = sauerkraut.qty;
}
function subSk(){
    sauerkraut.qty--;
    if(sauerkraut.qty < 0){ sauerkraut.qty=0; }
    document.getElementById("skqty").innerText = sauerkraut.qty;
}

let total = 0;
let order = document.getElementById("order");
order.addEventListener("click", getTotal);

function getTotal(){

    hotdog.total = hotdog.price * hotdog.qty;
    fries.total = fries.price * fries.qty;
    soda.total = soda.price * soda.qty;
    sauerkraut.total = sauerkraut.price * sauerkraut.qty;

    total = hotdog.total + fries.total + soda.total + sauerkraut.total;

    displayOrder(total);
}

function displayOrder(total){
    let summary = document.getElementById("summary");
    summary.innerHTML = hotdog.show() + "<br />"
                        + fries.show() + "<br />"
                        + soda.show() + "<br />"
                        + sauerkraut.show() + "<br />"
                        + "Grand total: " + total 
                        + "</br> <button id='refresh'>Start New Order</button>";

    let refresh = document.getElementById("refresh");
    refresh.addEventListener("click", startOver);
}

function startOver(){
    location.reload(); 
}