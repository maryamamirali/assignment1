const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Abdullah',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

] 

const div = document.querySelector(".div1")

for(let i = 0; i < phones.length; i++){
console.log(phones[i])
div.innerHTML += `
<div class = "div2">
<p><span class ="">Brand:</span> ${phones[i].brand}</p>
<p><span class ="">Model:</span> ${phones[i].model}</p>
<p><span class ="">Ram:</span> ${phones[i].ram}</p>
<p><span class ="">Rom:</span> ${phones[i].rom}</p>
<p><span class ="">Camera:</span> ${phones[i].camera}</p>
<p><span class ="">Price:</span> ${phones[i].price}</p>
<button onclick = "cartt()" class ="btn">Add to cart</button>
</div>
`
}


const cart = localStorage.getItem("selecteditems");
const jsondta = JSON.parse(cart);


let cartArray;
if(Array.isArray(jsondta)){
    cartArray = [...jsondta]

}else{
    cartArray = []
}


function cartt(){
    if(cartArray.includes(phones[i])){
for(let i = 0; i < cartArray.length; i++){
if(cartArray[i] === phones[i]){
    cartArray[i].quantity += 1
}
}
Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500
});
    }
else{
phones[i].quantity = 1
cartArray.push(phones[i]);
}
Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500
});

}



function shop(){
    window.location = "cart.html";
}



































