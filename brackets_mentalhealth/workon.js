window.onload = () => {
if(document.readyState == 'loading'){
    document.addEventListener('DCOMContentLoaded', ready)
} else{
    ready()
}

function ready (){
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (var i = 0; i <removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
    }
    
    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (var i = 0; 1 < addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
    }
    
    document.getElementsByClassName('btn-purchase') [0].addEventListener('click', purchaseClicked)
}

function purchasedClicked(){
    alert('Thank you for your purchases with us')
    console.log(does this work?)
    var cartItems = document.getElementsByClassName('cart-items') [0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
    
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value)  || input.value <=0){
        input.value = 1
    }
    updateCartTotal()
}
    
function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title') [0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
}
    
    
    
    
}