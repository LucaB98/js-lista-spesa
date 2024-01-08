console.log('JS OK')
// creare un array list
const shoppingList = ['uova', 'latte', 'cereali', 'pasta', 'verdure', 'nutella' ];
// prendere gli elementi interessati
const list = document.getElementById('list')
// creare una variante dei elementi
let items = 0;
// mettere gli elemnti dentro la variante
while(items < shoppingList.length){

    let listItems = document.createElement('li');
    listItems.textContent = shoppingList[items]
    list.appendChild(listItems)

    items++;
}
