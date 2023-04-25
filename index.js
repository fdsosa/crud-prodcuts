var itemBtn    = document.getElementById("addBtn");
var itemsList  = document.getElementById("listItems");

var itemTitle  = document.getElementById("itemTitle");
var itemDsc    = document.getElementById("itemDsc");
var itemPrice  = document.getElementById("itemPrice");
var itemMarket = document.getElementById("itemMarket");
var deleteButtons = document.getElementsByClassName('deleteButton')
console.log(deleteButtons)

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
    //delete button
    var deleteDiv = document.createElement('div');
    deleteDiv.classList.add('deleteColumn');
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'x';
    deleteButton.classList.add('deleteButton');
    deleteButton.setAttribute('id', 'item-' + (itemsList.childNodes.length));
    buttonsDeleter(deleteButton);
    deleteDiv.appendChild(deleteButton);
    itemBox.appendChild(deleteDiv);
    itemsList.appendChild(itemBox);
}

itemBtn.addEventListener("click", () => {
    createListItem(itemTitle.value, itemDsc.value, itemPrice.value, itemMarket.value);
    var itemsList = JSON.parse(localStorage.getItem('itemsList')) || [];
    itemsList.push({title: itemTitle.value, dsc: itemDsc.value, price: itemPrice.value, market: itemMarket.value});
    localStorage.setItem('itemsList', JSON.stringify(itemsList));
});

function buttonsDeleter(element) {
    element.addEventListener("click", () => {
        var index = element.id.split('-');
        itemsList.removeChild(itemsList.children[index[1]]);
        var localItemsList = JSON.parse(localStorage.getItem('itemsList'));
        localItemsList.splice([index[1]], 1);
        localStorage.setItem('itemsList', JSON.stringify(localItemsList));
        for (let i=0; i<deleteButtons.length; i++) {
            deleteButtons[i].setAttribute('id', 'item-' + i);
        }        
    })
}

function loadList() {
    var itemsList = JSON.parse(localStorage.getItem('itemsList'));
    itemsList.forEach(item => {
        createListItem(item.title, item.dsc, item.price, item.market)
    });
}




