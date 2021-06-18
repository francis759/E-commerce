function openNav() {

    let productSize = document.getElementById("size-holder").innerHTML;
    let productName = document.getElementById("product-name").innerHTML;
    let productColor = document.getElementById("color-holder").innerHTML;
    let productStyle = document.getElementById("product-style-product-page").innerHTML;
    let productQuantity = parseInt(document.getElementById('quantity-holder').value,10);

    if(productSize !== "select size" && !isNaN(productQuantity) && productColor !== "select color"
    && localStorage.getItem("productSize") !== null){

      localStorage.setItem("productName",productName);
      localStorage.setItem("productStyle",productStyle);
      localStorage.setItem("productQuantity",productQuantity);
      document.getElementById("Coverpane").style.width = "100%";
      document.getElementById("Coverpane").style.zIndex = "1";
      //
      document.getElementById("mySidepane").style.width = "360px";
      document.getElementById("mySidepane").style.zIndex = "2";
      //
      document.getElementById("sidepane-product-name").innerHTML = localStorage.getItem("productName");
      document.getElementById("sidepanenav-price").innerHTML = "Unit Price: $"+ localStorage.getItem("productPrice");
      document.getElementById("sidepanenav-color").innerHTML = "Color: "+ localStorage.getItem("productColor");
      document.getElementById("sidepanenav-size").innerHTML = "Size: "+ localStorage.getItem("productSize");
      document.getElementById("sidepanenav-quantity").innerHTML = "Qty: "+ localStorage.getItem("productQuantity");
      //
      let totalprice = productQuantity * parseFloat(localStorage.getItem("productPrice"));
      document.getElementById("Total-price").innerHTML = " $"+ (totalprice).toFixed(2) ;
      if(totalprice > 125){
        document.getElementById("color-bar").style.background = "green" ;
        document.getElementById("free-ground-status").innerHTML = "You qualify for FREE GROUND SHIPPING!" ;
      }
      else{
        amountPercentage = Math.round(totalprice/125 *100);
        document.getElementById("color-bar").style.background = "linear-gradient(to right, red "+ amountPercentage +"%, #CCC 50%)" ;
        document.getElementById("free-ground-status").innerHTML = "You don't qualify for FREE GROUND SHIPPING!" ;
      }
    }
    else{
      if(isNaN(productQuantity)){
        window.alert("Please enter valid number for quantity");
      }
      if(productColor === "select color"){
        window.alert("Please select product color");
      }
      else{
        window.alert("Please select product size");
      }
    }
    
}
  
  function closeNav() {
    document.getElementById("mySidepane").style.width = "0";
    document.getElementById("mySidepane").style.zIndex = "-1";
    //
    document.getElementById("Coverpane").style.width = "0%";
    document.getElementById("Coverpane").style.zIndex = "-1";
}
  function ChangeQuantityValue(sender){
    var value = parseInt(document.getElementById('quantity-holder').value,10);
    value = isNaN(value) ? 0 : value;
    if(sender.id === "increasebtn"){
      value++;
    }
    else{
      if(value > 1){
        value--;
      }
    }
    document.getElementById('quantity-holder').value = value;
}
function navigateToPicture(sender){
  let pic =  sender.getAttribute("pic-value");
  document.getElementById("big-picture").src = "Images/"+pic;
  document.getElementById("small-picture").src = "Images/"+pic;
  var childDivs = document.getElementsByClassName('img-icons');

  for( i=0; i< childDivs.length; i++ )
  {
     if(childDivs[i].id === sender.id){
       childDivs[i].style.border = "2px solid #76a1d3"
     }
     else{
      childDivs[i].style.border="none";
     }
  }
}
function normalDisplay(){
  var childDivs = document.getElementById('size-types').getElementsByTagName('div');

  for( i=0; i< childDivs.length; i++ )
  {
     if(childDivs[i].innerHTML === localStorage.getItem("productSize")){
       document.getElementById("size-holder").innerHTML = childDivs[i].innerHTML
       childDivs[i].style.background = "#002b5c"
       childDivs[i].style.border = "2px solid #76a1d3"
       childDivs[i].style.color = "#fff";
     }
     else{
      childDivs[i].style.background = "rgba(228, 226, 226, 0.5)";
      childDivs[i].style.color = "#002b5c";
      childDivs[i].style.border="none";
     }
  }
}

function displaySizeType(sender){
  var childDivs = document.getElementById('size-types').getElementsByTagName('div');

  for( i=0; i< childDivs.length; i++ )
  {
     if(childDivs[i].id === sender.id){
       childDivs[i].style.background = "blue";
       childDivs[i].style.color = "#fff";
     }
     else if(childDivs[i].innerHTML === localStorage.getItem("productSize")){
      childDivs[i].style.background = "#002b5c"
      childDivs[i].style.border = "2px solid #76a1d3"
      childDivs[i].style.color = "#fff";
     }
     else{
       childDivs[i].style.background = "rgba(228, 226, 226, 0.5)";
       childDivs[i].style.color = "#002b5c";
       childDivs[i].style.border="none";
     }
  }
}

function changeProductSize(sender){
  var childDivs = document.getElementById('size-types').getElementsByTagName('div');

  for( i=0; i< childDivs.length; i++ )
  {
     if(childDivs[i].id === sender.id){
       document.getElementById("size-holder").innerHTML = childDivs[i].innerHTML
       childDivs[i].style.background = "#002b5c"
       childDivs[i].style.border = "2px solid #76a1d3"
       childDivs[i].style.color = "#fff";
       localStorage.setItem("productSize",childDivs[i].innerHTML);
     }
     else{
       childDivs[i].style.background = "rgba(228, 226, 226, 0.5)";
       childDivs[i].style.color = "#002b5c";
       childDivs[i].style.border="none";
     }
  }
}

function displayProductColorName(sender){
  var childDivs = document.getElementsByClassName("color-display");
  for( i=0; i< childDivs.length; i++ )
  {
     if(childDivs[i].id === sender.id){
       document.getElementById("color-holder").innerHTML = childDivs[i].id;
     }
  }
}
function showSelectedColor(){
  var childDivs = document.getElementsByClassName("color-display");
  for( i=0; i< childDivs.length; i++ )
  {
    if(localStorage.getItem("productColor") !== null){
      if(childDivs[i].id === localStorage.getItem("productColor")){
        document.getElementById("color-holder").innerHTML = childDivs[i].id;
      }
    }
    else{
      document.getElementById("color-holder").innerHTML = "select color";
    }
  }
}

function changeProductColor(sender){
  var childDivs = document.getElementsByClassName("color-display");

  for( i=0; i< childDivs.length; i++ )
  {
     if(childDivs[i].id === sender.id){
       document.getElementById("color-holder").innerHTML = childDivs[i].id;
       childDivs[i].style.border = "3px solid #76a1d3"
       localStorage.setItem("productColor",childDivs[i].id);
       localStorage.setItem("productPrice",childDivs[i].getAttribute("price"));
     }
     else{
       childDivs[i].style.border="none";
     }
  }
}
function navigateToBag(){
  location.href = "myBag.html";
}
function getDetails(){
  document.getElementById("mybag-product-name").innerHTML = localStorage.getItem("productName");
  document.getElementById("mybag-style-holder").innerHTML = localStorage.getItem("productStyle");
  document.getElementById("mybag-color-holder").innerHTML = localStorage.getItem("productColor");
  document.getElementById("mybag-size-holder").innerHTML = localStorage.getItem("productSize");
  document.getElementById("my-bag-productquantity").value = localStorage.getItem("productQuantity")
  document.getElementById("my-bag-productunit-price").innerHTML = localStorage.getItem("productPrice");
  document.getElementById("mybag-Total-price-holder").innerHTML = (localStorage.getItem("productPrice") * localStorage.getItem("productQuantity")).toFixed(2);
  document.getElementById("sub-total").innerHTML = (localStorage.getItem("productPrice") * localStorage.getItem("productQuantity")).toFixed(2);
  document.getElementById("E-total").innerHTML = (localStorage.getItem("productPrice") * localStorage.getItem("productQuantity")).toFixed(2);

  

  let quantity = document.getElementById("my-bag-productquantity").value

  let totalprice = (quantity * parseFloat(localStorage.getItem("productPrice"))).toFixed(2);
  if(totalprice > 125){
    document.getElementById("item1").style.display = "block" ;
    document.getElementById("freegroundshipping").style.background = "green" ;
    document.getElementById("freeshipping-status").innerHTML = "You qualify for FREE GROUND SHIPPING!" ;
  }
  else{
    amountPercentage = Math.round(totalprice/125 *100);
    document.getElementById("item1").style.display = "none" ;
    document.getElementById("freegroundshipping").style.background = "linear-gradient(to right, red "+ amountPercentage +"%, #CCC 50%)" ;
    document.getElementById("freeshipping-status").innerHTML = "You don't qualify for FREE GROUND SHIPPING!" ;
  }
}

function updatePrice(){
   let newquantity = parseInt(document.getElementById('my-bag-productquantity').value,10);
   
   if(isNaN(newquantity)){
      window.alert(newquantity)
   }
   else{
    localStorage.setItem("productQuantity",newquantity)
   }
 
   let quantity = document.getElementById("my-bag-productquantity").value
 
   let totalprice = (quantity * parseFloat(localStorage.getItem("productPrice"))).toFixed(2);
   if(totalprice > 125){
     document.getElementById("freegroundshipping").style.background = "green" ;
     document.getElementById("freeshipping-status").innerHTML = "You qualify for FREE GROUND SHIPPING!" ;
   }
   else{
     amountPercentage = Math.round(totalprice/125 *100);
     document.getElementById("freegroundshipping").style.background = "linear-gradient(to right, red "+ amountPercentage +"%, #CCC 50%)" ;
     document.getElementById("freeshipping-status").innerHTML = "You don't qualify for FREE GROUND SHIPPING!" ;
   }
   document.getElementById("E-total").innerHTML = localStorage.getItem("productPrice") * localStorage.getItem("productQuantity");
   document.getElementById("mybag-Total-price-holder").innerHTML = (localStorage.getItem("productPrice") * localStorage.getItem("productQuantity")).toFixed(2);
   document.getElementById("sub-total").innerHTML = (localStorage.getItem("productPrice") * localStorage.getItem("productQuantity")).toFixed(2);
   document.getElementById("E-total").innerHTML = (localStorage.getItem("productPrice") * localStorage.getItem("productQuantity")).toFixed(2);
}
function displayOptions(sender){
  let quantity = document.getElementById("my-bag-productquantity").value
 
  let totalprice = (quantity * parseFloat(localStorage.getItem("productPrice"))).toFixed(2);
  let childDivs = document.getElementsByClassName("item");
   for(i=0; i<childDivs.length ; i++){
     if(childDivs[i].id == sender.value){
        if(childDivs[i].id !== "item1"){
          childDivs[i].style.display="block";
        }
        else{
          if(totalprice > 125){
            childDivs[i].style.display="block";
          }
        }
     }
     else{
      childDivs[i].style.display="none";
     }
   }
}

