console.log('JS OK')

const shoppingList = ['uova', 'latte', 'cereali', 'pasta', 'verdure', 'nutella' ];

const list = document.getElementById('list')

let items = 0;

while(items < shoppingList.length){

    let listItems = document.createElement('li');
    listItems.textContent = shoppingList[items]
    list.appendChild(listItems)

    items++;
}
