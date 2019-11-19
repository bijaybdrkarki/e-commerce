
let pantplus =document.getElementById("pantplusbutton");
let pantminus= document.getElementById("pantminusbutton"); 
let shirtplus =document.getElementById("shirtplusbutton");
let shirtminus= document.getElementById("shirtminusbutton"); 

function increasequantityofpant()
{
    let quantity = parseInt(document.getElementById("pantquantity").innerText);
    quantity++;
    document.getElementById("pantquantity").innerHTML = quantity;
    let extentedPrice = pantExtendedprice(quantity);
    document.getElementById("pantextendedPrice").innerHTML = `$ ${extentedPrice}`;
}
function dercreasequantityofpant()
{
    let quantity = parseInt(document.getElementById("pantquantity").innerText);
    quantity--;
    document.getElementById("pantquantity").innerHTML = quantity;
    let extentedPrice = pantExtendedprice(quantity);
    document.getElementById("pantextendedPrice").innerHTML = `$ ${extentedPrice}`;
}
function pantExtendedprice(quantity)
{
return (quantity*40.99).toFixed(3);
}
function increasequantityofshirt()
{
    let quantity = parseInt(document.getElementById("shirtquantity").innerText);
    quantity++;
    document.getElementById("shirtquantity").innerHTML = quantity;
    let extentedPrice = shirtExtendedprice(quantity);
    document.getElementById("shirtextendedPrice").innerHTML = `$ ${extentedPrice}`;
}
function dercreasequantityofshirt()
{
    let quantity = parseInt(document.getElementById("shirtquantity").innerText);
    quantity--;
    document.getElementById("shirtquantity").innerHTML = quantity;
    let extentedPrice = shirtExtendedprice(quantity);
    document.getElementById("shirtextendedPrice").innerHTML = `$ ${extentedPrice}`;
}
function shirtExtendedprice(quantity)
{
return (quantity*10.99).toFixed(3);
}

pantplus.addEventListener("click", increasequantityofpant);
pantminus.addEventListener("click", dercreasequantityofpant);
shirtplus.addEventListener("click", increasequantityofshirt);
shirtminus.addEventListener("click", dercreasequantityofshirt);

