const shoppingList = ['Arroz', 'Feijão', 'Carne', 'Macarrão', 'Bolacha', 'Pão'];

const listEl = document.getElementById('list');
const searchField = document.getElementById('searchField');

searchField.addEventListener('input', inputHandler);


//preencher lista no front
for (let i = 0; i < shoppingList.length; i++) {
    let listItems = document.createElement("li");
    listItems.innerHTML = shoppingList[i];
    listEl.appendChild(listItems);
}

this.fillLister();

//atualizar a lista no front
function fillLister(list = shoppingList) {
    listEl.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

//filtrar a lista
function inputHandler() {
    const filteredList = shoppingList.filter(el => {
        const listItem = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItem.includes(searchWord);
    })

    fillLister(filteredList);
}

