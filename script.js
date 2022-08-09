const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
var mainImg = document.getElementById("main-image");
var smallImg = document.getElementsByClassName("small-img");
for (var i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", checkIndex);
}
function checkIndex(event) {
  var x = Array.from(smallImg).indexOf(event.target);
  mainImg.src = smallImg[x].src;
}

var price = document.getElementsByClassName("price");
var quantity = document.getElementsByClassName("quantity");
var totalPrice = document.getElementsByClassName("totalPrice");
for (var i = 0; i < quantity.length; i++) {
  
  quantity[i].addEventListener("change", setprice, false);
  quantity[i].index = i;
}
function setprice(event) {
    
  var x = event.currentTarget.index;
  
  console.log(totalPrice[x].textContent.substring(1));
  totalPrice[x].textContent = "$"+ (quantity[x].value * price[x].textContent.substring(1)).toFixed(2);
  var total = 0;
for (var i = 0; i < totalPrice.length; i++) {
    
    total = total + Number(totalPrice[i].textContent.substring(1));
}
document.getElementById('sub').innerText = "$" + total.toFixed(2)
document.getElementById('total').innerText = "$" + total.toFixed(2)
}


