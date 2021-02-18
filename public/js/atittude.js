
const adding = document.querySelector('#addingredient');
let currentIngredient = document.querySelector('#ingredient');


const list = document.querySelector('#ingList');




adding.addEventListener("click", (event) =>{
    event.preventDefault()
    createIngredient();




})


function createIngredient(){ const divIng = document.createElement('div');
    divIng.setAttribute('class', 'divIng');
    const newIngredient = document.createElement('INPUT');
    newIngredient.setAttribute('type', 'text');
    newIngredient.setAttribute('name', 'ingredient');
    newIngredient.setAttribute('value', currentIngredient.value);
    list.append(divIng);
    divIng.append(newIngredient)
    const deleteButton = document.createElement('span');
    deleteButton.innerHTML="<a href=\"#\">[x]</a>"
    deleteButton.setAttribute('class', 'delete')
    divIng.append(deleteButton);
    currentIngredient.value = '';
    divIng.addEventListener('click', () =>{
        divIng.remove();
    })}


function editIngredient(ingredient){ const divIng = document.createElement('div');
    divIng.setAttribute('class', 'divIng');
    const newIngredient = document.createElement('INPUT');
    newIngredient.setAttribute('type', 'text');
    newIngredient.setAttribute('name', 'ingredient');
    newIngredient.setAttribute('value', ingredient);
    list.append(divIng);
    divIng.append(newIngredient)
    const deleteButton = document.createElement('span');
    deleteButton.innerHTML="<a href=\"#\">[x]</a>"
    deleteButton.setAttribute('class', 'delete')
    divIng.append(deleteButton);
    divIng.addEventListener('click', () =>{
        divIng.remove();
    })}

