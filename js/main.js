//#region products list json
//due to lack of backend the json array with products is directly in the js code
let products= [
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "ImageName" : "./img/product-picture-1.jpg",
        "ProductDescription" : "some description"
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "ImageName" : "./img/product-picture-1.jpg",
        "ProductDescription" : "some description"
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitPrice": 10,
        "UnitsInStock": 0,
        "ImageName" : "./img/product-picture-1.jpg",
        "ProductDescription" : "some description"
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "ImageName" : "./img/product-picture-1.jpg",
        "ProductDescription" : "some description"
    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "ImageName" : "./img/product-picture-1.jpg",
        "ProductDescription" : "some description"
    },
    {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "ImageName" : "./img/product-picture-1.jpg",
        "ProductDescription" : "some description"
    },
    {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "UnitPrice": 30,
        "UnitsInStock": 0,
        "ImageName" : "./img/product-picture-1.jpg",
        "ProductDescription" : "some description"
    },
    {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "UnitPrice": 40,
        "UnitsInStock": 0,
        "ImageName" : "./img/product-picture-1.jpg",
        "ProductDescription" : "some description"
    },
    {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "ImageName" : "./img/product-picture-1.jpg",
        "ProductDescription" : "some description"
    },
    {
        "ProductID": 10,
        "ProductName": "Ikura",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "ImageName" : "./img/product-picture-1.jpg",
        "ProductDescription" : "some description"
    }
]

//#endregion

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
//pass units in stock of product
function createTableCell(appendToRowID, productID, productName, produtImageSrc, productPrice, unitsInStock){
    var appendToRow = document.getElementById(appendToRowID); 
    
    var td = document.createElement("td");
    appendToRow.appendChild(td);

    var newProductDiv = document.createElement("div");
    newProductDiv.setAttribute('class', 'product');
    newProductDiv.setAttribute('id', productID);
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
    var functionCall = 'displayDetails(' + productID + ')';
    newImage.setAttribute('onclick', functionCall);
    newImage.setAttribute('src', produtImageSrc);
    newImageContainer.appendChild(newImage);

    var newPriceTagContainer = document.createElement("div");
    newPriceTagContainer.setAttribute('class', 'price-tag-container');
    newProductDiv.appendChild(newPriceTagContainer);

    var newPriceTag = document.createElement('p');
    newPriceTag.setAttribute('class', 'price-tag');
    newPriceTag.innerHTML += '$' + productPrice;
    newPriceTagContainer.appendChild(newPriceTag);

    appendAddToCartButton(newProductDiv, unitsInStock);
}

function appendAddToCartButton(appendTo, unitsInStock){

    var newButtonContainer = document.createElement('div');
    newButtonContainer.setAttribute('class', 'add-to-cart-button-container');
    appendTo.appendChild(newButtonContainer);

    var newButton = document.createElement('button');
    newButton.setAttribute('class', 'add-to-cart-button');

    if(unitsInStock === 0){
    newButton.setAttribute('inactive', 'true');
    newButton.setAttribute('class', 'add-to-cart-button-inactive');

    newButton.innerHTML += 'Out of stock';
    }
    else{
        newButton.innerHTML += 'Add to cart';
    }
    newButtonContainer.appendChild(newButton);
}

//always call on page open
createProductsTable();

for(var i = 0; i < products.length; i++){
    var rowName = 'newRow';
    var temp = i/3;
    temp = Math.floor(temp);
    rowName += temp;

    if(i % 3 == 0){
        createTableRow('newProductsTable', rowName);
    }

    createTableCell(rowName,products[i].ProductID, products[i].ProductName, products[i].ImageName, products[i].UnitPrice, products[i].UnitsInStock);
}

//#endregion

//#region Detaisl window

function closeDetailsWindow(){
    var detailsWindow = document.getElementById('details-window');
    detailsWindow.remove();
}

function displayDetails(productID){

    //check if details window is already open
    if(document.getElementById('details-window')==undefined){

    //create window
    var newDetailsWindow = document.createElement('div');
    newDetailsWindow.setAttribute('class', 'details-window');
    newDetailsWindow.setAttribute('id', 'details-window');

    //create left column
    var leftColumn = document.createElement('div');
    leftColumn.setAttribute('class', 'left-column');

    var image = document.createElement('img');
    image.setAttribute('class', 'details-window-image');
    image.setAttribute('src', getProductImage(productID));

    //create right column
    var rightColumn = document.createElement('div');
    rightColumn.setAttribute('class', 'right-column');

    var name = document.createElement('h2');
    name.setAttribute('class', 'details-window-emphasised');
    name.innerHTML+=getProductName(productID);

    var description = document.createElement('p');
    description.setAttribute('class', 'details-window-text');
    description.innerHTML+=getProductDescription(productID);

    var price = document.createElement('h3');
    price.setAttribute('class', 'details-window-emphasised');
    price.innerHTML+='$' + getProductPrice(productID);

    //append elements to columns
    //left
    leftColumn.appendChild(image);

    //right
    rightColumn.appendChild(name);
    rightColumn.appendChild(description);
    rightColumn.appendChild(price);


    //create buttons
    var buttonsContainer =  document.createElement('div');
    buttonsContainer.setAttribute('class', 'buttons-container');

    var addButton = document.createElement('button');
    addButton.setAttribute('class', 'details-window-add');

    if(getProductUnitsInStock(productID) === 0){
        addButton.setAttribute('inactive', 'true');
        addButton.setAttribute('class', 'add-to-cart-button-inactive');
    
        addButton.innerHTML += 'Out of stock';
    }
    else{
        addButton.innerHTML += 'Add to cart';
    }

    var closeButton = document.createElement('buttn');
    closeButton.setAttribute('class', 'details-window-close');
    closeButton.setAttribute('onclick', 'closeDetailsWindow()');
    closeButton.innerHTML+="Close";

    //append buttons to container
    buttonsContainer.appendChild(addButton);
    buttonsContainer.appendChild(closeButton);

    //append buttons to right column
    rightColumn.appendChild(buttonsContainer);

    //append columns to window
    newDetailsWindow.appendChild(leftColumn);
    newDetailsWindow.appendChild(rightColumn);

    //append window to page
    var detailsWindowContainer = document.getElementById('details-window-container');
    detailsWindowContainer.appendChild(newDetailsWindow);
    }
}


//getters by ID
function getProductImage(productID){
    for(var i = 0; i < products.length; i++){
        if(products[i].ProductID == productID){
            return products[i].ImageName;
        }
    }
}

function getProductName(productID){
    for(var i = 0; i < products.length; i++){
        if(products[i].ProductID == productID){
            return products[i].ProductName;
        }
    }

}

function getProductDescription(productID){
    for(var i = 0; i < products.length; i++){
        if(products[i].ProductID == productID){
            return products[i].ProductDescription;
        }
    }
}

function getProductPrice(productID){
    for(var i = 0; i < products.length; i++){
        if(products[i].ProductID == productID){
            return products[i].UnitPrice;
        }
    }
}

function getProductUnitsInStock(productID){
    for(var i = 0; i < products.length; i++){
        if(products[i].ProductID == productID){
            return products[i].UnitsInStock;
        }
    }
}


