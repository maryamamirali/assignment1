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
<div>
<p><span class ="width">Brand:</span> ${phones[i].brand}</p>
<p><span class ="width">Model:</span> ${phones[i].model}</p>
<p><span class ="width">Ram:</span> ${phones[i].ram}</p>
<p><span class ="width">Rom:</span> ${phones[i].rom}</p>
<p><span class ="width">Camera:</span> ${phones[i].camera}</p>
<p><span class ="width">Price:</span> ${phones[i].price}</p>
<button class ="btn">Add to cart</button>
</div>

`
}
