const product = shoes;

const categories = [... new Set(product.map((item) =>
    {return item}))]
    let i = 0;
document.getElementById('select-shoes-container').innerHTML = categories.map((item) =>
{
    let {pictures_1, name, price, category} = item;
    return(
        `<div class="shoes-box">
            <div class="shoes-img-box">
                <img class="shoes-cover-img" src="${pictures_1}"></img>
            </div>    
        <div class="bottom">
        <h1 class="shoes-name">${name}</h1>
        <h2 class="shoes-sub-name">${category}</h2>
        <h2 class="shoes-price"> $ ${price}</h2>` +
        "<button class = 'add-to-cart-btn' onclick='addtocart("+(i++)+")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

let cart = [];

function addtocart(a){
    const sideBar = document.getElementById('shopping-box');
    sideBar.style.display = "block";
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();

}

function displaycart(a){
    let j = 0;
    total = 0;
    document.getElementById('count').innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "$" + 0;
        const sideBar = document.getElementById('shopping-box');
        sideBar.style.display = "none";
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((items) =>{
            let {pictures_1, name, price} = items;
            total = total + price;
            document.getElementById('total').innerHTML = "$" + total.toFixed(2);
            return(
                `<div class = 'cart-item'>
                <div class="shoes-img-box cart-img">
                    <img class="shoes-cover-img" src="${pictures_1}"></img>
                </div>   
                <div class="cart-box"> 
                    <h1 class="shoes-name">${name}</h1> 
                    <h2 class="shoes-price"> $ ${price}</h2>
                </div> `
                +
                "<img src='/icons/trash.svg' alt='' class='fa-solid fa-trash' onclick = 'delElement("+(j++)+")'></img></div>"
                
            )
            
        }).join('');

        }
    }
