//this runs when the window has loaded
window.onload = () => {
if(document.readyState == 'loading'){
    document.addEventListener('DCOMContentLoaded', ready)
} else {
    ready()
}

//this function is when the window has loaded
    function ready (){
//        removing items from cart
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
    }
//        changing the quantity not going below one
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
    }
//        adding items to cart
    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (var i = 0; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
    }
    
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
    
//this function removes items from cart
function removeCartItem(){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
//changing the quantity for item in cart
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <=0){
    input.value = 1
    }
    updateCartTotal()
}

//this function is adding product to cart
function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-name')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
}
 
//this function is adding product to cart and checking if already items already be added if it has then producing a message letting the user know
    function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i=0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
            alert("This item has been added already to the cart")
            return
        }
    }
//       this is for adding for details to the item in the cart (image, title, price) 
    var cartRowContents = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    updateCartTotal()
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

//this function is for changing the total price
 function updateCartTotal(){
     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
     var total = 0
     for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',""))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
     total = Math.round(total * 100)/100
     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    }  
}