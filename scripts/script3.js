console.log("working 3");

//function object
function Item(name, price, qty){
    this.name = name;
    this.price = price;
    this.qty = qty;
}

hotdog = new Item("hotdog", 4, 0);
fries = new Item("fries", 3.50, 0);
soda = new Item("soda", 1.50, 0);
sauerkraut = new Item("sauerkraut", 1, 0);

let hdqty = hotdog.qty;
document.getElementById("hdqty").innerText = hotdog.qty;

let fqty = fries.qty;
document.getElementById("fqty").innerText = fries.qty;

let sqty = soda.qty;
document.getElementById("sqty").innerText = soda.qty;

let skqty = sauerkraut.qty;
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
    hdqty++;
    document.getElementById("hdqty").innerText = hdqty;
}
function subHotdog(){
    hdqty--;
    if(hdqty < 0){ hdqty=0; }
    document.getElementById("hdqty").innerText = hdqty;
}

function addFries(){
    fqty++;
    document.getElementById("fqty").innerText = fqty;
}
function subFries(){
    fqty--;
    if(fqty < 0){ fqty=0; }
    document.getElementById("fqty").innerText = fqty;
}

function addSoda(){
    sqty++;
    document.getElementById("sqty").innerText = sqty;
}
function subSoda(){
    sqty--;
    if(sqty < 0){ sqty=0; }
    document.getElementById("sqty").innerText = sqty;
}

function addSk(){
    skqty++;
    document.getElementById("skqty").innerText = skqty;
}
function subSk(){
    skqty--;
    if(skqty < 0){ skqty=0; }
    document.getElementById("skqty").innerText = skqty;
}

let total = 0;
let order = document.getElementById("order");
order.addEventListener("click", getTotal);

function getTotal(){
    
    let hdprice = hotdog.price;
    hdprice *= hdqty;

    let fprice = fries.price;
    fprice *= fqty;

    let sprice = soda.price;
    sprice *= sqty;

    let skprice = sauerkraut.price;
    skprice *= skqty;

    total = hdprice + fprice + sprice + skprice;

    displayOrder(hdprice, fprice, sprice, skprice, total);
}

function displayOrder(a, b, c, d, total){
    let summary = document.getElementById("summary");
    summary.innerHTML = "Hotdog qty: " + hdqty + "</br> $" + a + "</br></br>"
                        + "Fries qty: " + fqty + "</br> $" + b + "</br></br>"
                        + "Soda qty: " + sqty + "</br> $" + c + "</br></br>"
                        + "Sauerkraut qty: " + skqty + "</br> $" + d + "</br></br>"
                        + "<span id='bold'>Total $" + total 
                        + "</span></br> <button id='refresh'>Start New Order</button>";

    let refresh = document.getElementById("refresh");
    refresh.addEventListener("click", startOver);
}

function startOver(){
    location.reload(); 
}