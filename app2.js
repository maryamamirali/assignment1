
function home(){
window.location = "index.html"
localStorage.setItem("cart" , JSON.stringify(cartArr))
}

const loclstrg = localStorage.getItem("cart");
const cartarray = JSON.parse(loclstrg);


const div4 = document.querySelector(".div4");
const totlamt = document.querySelector(".ttlamt")

function amount(){
let totlamt = 0;
totlamt.innerHTML = " "
if(cartarray.length > 0){
for(i = 0; i < cartarray.length; i++){
totlamt += cartarray[i].price * cartarray[i].quantity
div.innerHTML += `
<p><span>Brands:</span>${cartarray[i]/bra}</p>
` 
}
}
}
