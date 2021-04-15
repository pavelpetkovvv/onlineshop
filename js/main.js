//#region slideshow JS
var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if(slides.length!=0){
      slides[slideIndex-1].style.display = "block";
    }
  }

showSlides(slideIndex);

//change slide every 10 seconds
function myLoop() {         
    setTimeout(function() {  
        plusSlides(1);
      myLoop();
    }, 10000)
  }
  myLoop();
 
//#endregion

//#region products display

let products= [
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "ImageName" : "./img/product-picture-1.jpg"
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "ImageName" : "./img/product-picture-1.jpg"
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitPrice": 10,
        "UnitsInStock": 0,
        "ImageName" : "./img/product-picture-1.jpg"
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "ImageName" : "./img/product-picture-1.jpg"
    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "ImageName" : "./img/product-picture-1.jpg"
    },
    {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "ImageName" : "./img/product-picture-1.jpg"
    },
    {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "UnitPrice": 30,
        "UnitsInStock": 0,
        "ImageName" : "./img/product-picture-1.jpg"
    },
    {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "UnitPrice": 40,
        "UnitsInStock": 0,
        "ImageName" : "./img/product-picture-1.jpg"
    },
    {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "ImageName" : "./img/product-picture-1.jpg"
    },
    {
        "ProductID": 10,
        "ProductName": "Ikura",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "ImageName" : "./img/product-picture-1.jpg"
    }
]

console.log(products.length);

function createProductsTable(){

    //create new table in 'products-section-container' (which is already in shop.html)
    var productsContainer = document.getElementById("products-section-container");
    var newProductsTable = document.createElement("table");

    //set table class to 'produt-section'
    newProductsTable.setAttribute('class', 'product-section');
    productsContainer.appendChild(newProductsTable);

    //set table id to 'newProductsTable'
    newProductsTable.setAttribute('id', 'newProductsTable');
}

//pass ID to set to new row
//pass ID of table to append row to
function createTableRow(appendToTableID, rowID){
        
    appendToTable = document.getElementById(appendToTableID);
    
    //crate new row and append it
    var newRow = document.createElement("tr");
    appendToTable.appendChild(newRow);

    newRow.setAttribute('id', rowID)

}

//create new table cell
//pass ID of row to append cell to
//pass name and price of product and source of image to be displayed  
function createTableCell(appendToRowID, productName, produtImageSrc, productPrice){
    var appendToRow = document.getElementById(appendToRowID); 
    
    var td = document.createElement("td");
    appendToRow.appendChild(td);

    var newProductDiv = document.createElement("div");
    newProductDiv.setAttribute('class', 'product');
    td.appendChild(newProductDiv);

    var newProductName = document.createElement("div");
    newProductName.setAttribute('class', 'product-name');
    newProductName.innerHTML += productName;
    newProductDiv.appendChild(newProductName);

    var newImageContainer = document.createElement('div');
    newImageContainer.setAttribute('class', 'product-image-container');
    newProductDiv.appendChild(newImageContainer);

    var newImage = document.createElement('img');
    newImage.setAttribute('class', 'product-image');
    newImage.setAttribute('src', produtImageSrc);
    newImageContainer.appendChild(newImage);

    var newPriceTagContainer = document.createElement("div");
    newPriceTagContainer.setAttribute('class', 'price-tag-container');
    newProductDiv.appendChild(newPriceTagContainer);

    var newPriceTag = document.createElement('p');
    newPriceTag.setAttribute('class', 'price-tag');
    newPriceTag.innerHTML += productPrice;
    newPriceTagContainer.appendChild(newPriceTag);

    appendAddToCartButton(newProductDiv);
}

function appendAddToCartButton(appendTo){
    var newButtonContainer = document.createElement('div');
    newButtonContainer.setAttribute('class', 'add-to-cart-button-container');
    appendTo.appendChild(newButtonContainer);

    var newButton = document.createElement('button');
    newButton.setAttribute('class', 'add-to-cart-button');
    newButton.innerHTML += 'Add to cart';
    newButtonContainer.appendChild(newButton);
}


createProductsTable();

for(var i = 0; i < products.length; i++){
    var rowName = 'newRow';
    var temp = i/3;
    temp = Math.floor(temp);
    rowName += temp;

    if(i % 3 == 0){
        createTableRow('newProductsTable', rowName);
    }

    console.log(rowName);
    createTableCell(rowName, products[i].ProductName, products[i].ImageName, products[i].UnitPrice);
}
