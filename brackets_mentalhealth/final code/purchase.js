window.onload = () => {
if(document.readyState == 'loading'){
    document.addEventListener('DCOMContentLoaded', ready)
} else {
    ready()
}
    
    function purchaseClicked(){
    alert('Thank you for your purchases')
    var cartItems = document.getElementsByClassName('btn-order')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}