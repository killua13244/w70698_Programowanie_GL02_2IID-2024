let wynik=1
function silnia(a){
    for (var i = 1; i<=a; i++){
        wynik=wynik*i
    }
    return wynik
}

console.log(silnia(5))
function change(c){
    const buttons = document.querySelectorAll('.button')
    buttons.forEach(button => {
        button.classList.remove('active');
    })
    
    document.getElementById(c).classList.add('active');
}

function change2(){
    const tb = document.getElementById('btn4')
    const et = document.getElementById('kekw')
    tb.addEventListener('click', () => {
        if (et.classList.contains('hidden')){
            et.classList.remove('hidden')
        } else {
            et.classList.add('hidden')
        }
    })
}

function DodList() {
    const textInput = document.getElementById('textInput');
    const value = textInput.value.trim();
    
    if (value !== '') {
    const itemList = document.getElementById('itemList');
    const li = document.createElement('li');
    li.textContent = value;
    itemList.appendChild(li);
    textInput.value = '';
    } else {
    alert('Pole tekstowe jest puste. Wpisz wartość, którą chcesz dodać do listy.');
    }
    }

function addItemToTable() {
        const firstNameInput = document.getElementById('firstNameInput');
        const lastNameInput = document.getElementById('lastNameInput');
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        
        if (firstName !== '' && lastName !== '') {
        const table = document.getElementById('dataTable');
        const newRow = table.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.textContent = firstName;
        cell2.textContent = lastName;
        firstNameInput.value = '';
        lastNameInput.value = '';
        } else {
        alert('Pola tekstowe są puste. Wpisz imię i nazwisko, które chcesz dodać do tabeli.');
        }
        }