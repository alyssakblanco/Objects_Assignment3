console.log("working 1");

//associative array
items = [];
items["hotdog"] = 4;
items["fries"] = 3.50;
items["soda"] = 1.50;
items["sauerkraut"] = 1;

let hdqty = document.getElementById("hdqty").innerText;
document.getElementById("hdqty").innerText = 0;

let fqty = document.getElementById("fqty").innerText;
document.getElementById("fqty").innerText = 0;

let sqty = document.getElementById("sqty").innerText;
document.getElementById("sqty").innerText = 0;

let skqty = document.getElementById("skqty").innerText;
document.getElementById("skqty").innerText = 0;

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
    
    let hdprice = items["hotdog"];
    hdprice *= hdqty;

    let fprice = items["fries"];
    fprice *= fqty;

    let sprice = items["soda"];
    sprice *= sqty;

    let skprice = items["sauerkraut"];
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