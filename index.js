var itemBtn    = document.getElementById("addBtn");
var itemsList  = document.getElementById("listItems");

var itemTitle  = document.getElementById("itemTitle");
var itemDsc    = document.getElementById("itemDsc");
var itemPrice  = document.getElementById("itemPrice");
var itemMarket = document.getElementById("itemMarket");

loadList();

function createListBox(name, text, parent) {
    var item = document.createElement('p');
    item.innerText = text;
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('listItem', `${name}Column`);
    itemDiv.appendChild(item);
    parent.appendChild(itemDiv);
}

function createListItem(titleItem, dscItem, priceItem, marketItem) {
    var itemBox = document.createElement('div');
    itemBox.classList.add('itemMain')
    //title columm
    createListBox('title', titleItem, itemBox);
    //dsc columm
    createListBox('dsc', dscItem, itemBox);
    //price columm
    createListBox('price', priceItem, itemBox);
    //market columm
    createListBox('market', marketItem, itemBox);   

    itemsList.appendChild(itemBox);
}

itemBtn.addEventListener("click", () => {
    createListItem(itemTitle.value, itemDsc.value, itemPrice.value, itemMarket.value);
    var itemsList = JSON.parse(localStorage.getItem('itemsList')) || [];
    itemsList.push({title: itemTitle.value, dsc: itemDsc.value, price: itemPrice.value, market: itemMarket.value});
    localStorage.setItem('itemsList', JSON.stringify(itemsList));
});

function loadList() {
    var itemsList = JSON.parse(localStorage.getItem('itemsList'));
    itemsList.forEach(item => {
        createListItem(item.title, item.dsc, item.price, item.market)
    });
}




