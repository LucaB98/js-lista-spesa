console.log('JS OK')
// creare un array list
const shoppingList = ['uova', 'latte', 'cereali', 'pasta', 'verdure', 'nutella' ];
// prendere gli elementi interessati
const list = document.getElementById('list')
// creare una variante dei elementi
let items = '';
// mettere gli elemnti dentro la variante

let i = 0;
while(i < shoppingList.length){
    items+=`<li>${shoppingList[i]}<li>`;
    i++;
}

list.innerHTML = items;