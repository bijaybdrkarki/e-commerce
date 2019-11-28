
let pantplus =document.getElementById("pantplusbutton");
let pantminus= document.getElementById("pantminusbutton"); 
let shirtplus =document.getElementById("shirtplusbutton");
let shirtminus= document.getElementById("shirtminusbutton"); 
let calculate= document.getElementById("calculate");
let promocode = document.getElementById("promocode");
let couponcode= document.getElementById("submit");


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
    if (quantity>0){
        quantity--;
    }else{
        quantity= 0;
    }
    
    document.getElementById("pantquantity").innerHTML = quantity;
    let extentedPrice = pantExtendedprice(quantity);
    document.getElementById("pantextendedPrice").innerHTML = `$ ${extentedPrice}`;
}
function pantExtendedprice(quantity)
{
return (quantity*40.99).toFixed(2);
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
    if (quantity>0){
        quantity--;
    }else{
        quantity= 0;
    }
    document.getElementById("shirtquantity").innerHTML = quantity;
    let extentedPrice = shirtExtendedprice(quantity);
    document.getElementById("shirtextendedPrice").innerHTML = `$ ${extentedPrice}`;
}
function shirtExtendedprice(quantity)
{
return (quantity*10.99).toFixed(2);
}

function calcHstTotal(){
    let pantprice = (document.getElementById("pantextendedPrice").innerText).split(' ');
    let shirtprice = document.getElementById("shirtextendedPrice").innerText.split(' ');
    let subtotal= (parseFloat(pantprice[1]) + parseFloat(shirtprice[1])).toFixed(2) ;
    let tax = (0.13*subtotal).toFixed(2);
    let total= (parseFloat(subtotal)  + parseFloat(tax)).toFixed(2);
    document.getElementById("subtotal").innerHTML = `$ ${subtotal}`;
    document.getElementById("tax").innerHTML = `$ ${tax}`;
    document.getElementById("total").innerHTML = `$ ${total}`;
}
function enterPromoCode(){
    let subtotal = (document.getElementById("subtotal").innerText).split(' ');
    // console.log(subtotal);
    if (subtotal[1]=='0.00')
    {
        window.alert('Buy something before entering code');
    } 
    else
    {
        document.getElementById("notvisible").classList.replace("notvisible","visible");
    }       
}
function checkCodeValidity(){
    calcHstTotal();// prevent user from entering code multiple times
    let couponcode = document.getElementById("codevalue").value;
    let subtotal = (document.getElementById("subtotal").innerText).split(' ');
        if (couponcode === 'NOTAX')
        {
            document.getElementById("tax").innerHTML = `$ 0.00 (By No-tax coupon)`;
            document.getElementById("total").innerHTML = subtotal[0]+subtotal[1];
        }
        else if(couponcode === 'FIFTYFIFTY')
        {
            let newsubtotal = (parseFloat(subtotal[1])*0.5).toFixed(2); 
            let tax = (0.13*newsubtotal).toFixed(2);
            let total= (parseFloat(newsubtotal)  + parseFloat(tax)).toFixed(2);
            document.getElementById("subtotal").innerHTML = `$ ${newsubtotal} (By fiftyfifty coupon)`;
            document.getElementById("tax").innerHTML = `$ ${tax}`;
            document.getElementById("total").innerHTML = `$ ${total}`;
        }
        else{
            window.alert(' Invalid code Try Again');
        }
}


pantplus.addEventListener("click", increasequantityofpant);
pantminus.addEventListener("click", dercreasequantityofpant);
shirtplus.addEventListener("click", increasequantityofshirt);
shirtminus.addEventListener("click", dercreasequantityofshirt);
calculate.addEventListener("click", calcHstTotal);
promocode.addEventListener("click", enterPromoCode);
couponcode.addEventListener("click", checkCodeValidity);
