document.addEventListener("DOMContentLoaded", function() {
    var imie = document.getElementById("imie");
    var nazwisko = document.getElementById("nazwisko");
    var mail = document.getElementById("mail");
    var haslo = document.getElementById("haslo");
    var hasloPowtorz = document.getElementById("hasloPowtorz");


    function validateField(fieldId, isValid, errorMessage) {
        var errorElement = document.getElementById(fieldId + "Error");
        if (!isValid) {
            errorElement.textContent = errorMessage;
        } else {
            errorElement.textContent = "";
        }
    }

    imie.addEventListener("input", function() { validateField("imie", checkLetterCount(imie.value, 3), "Imie must have at least 3 letters."); });
    imie.addEventListener("blur", function() { validateField("imie", checkLetterCount(imie.value, 3), "Imie must have at least 3 letters."); });
    
    nazwisko.addEventListener("input", function() { validateField("nazwisko", checkLetterCount(nazwisko.value, 3), "Nazwisko must have at least 3 letters."); });
    nazwisko.addEventListener("blur", function() { validateField("nazwisko", checkLetterCount(nazwisko.value, 3), "Nazwisko must have at least 3 letters."); });
    
    mail.addEventListener("input", function() { validateField("mail", validateEmail(mail.value), "Invalid email format."); });
    mail.addEventListener("blur", function() { validateField("mail", validateEmail(mail.value), "Invalid email format."); });
    
    haslo.addEventListener("input", function() { validateField("haslo", checkPasswordStrength(haslo.value), "Password is too weak. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."); });
    haslo.addEventListener("blur", function() { validateField("haslo", checkPasswordStrength(haslo.value), "Password is too weak. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."); });
    
    hasloPowtorz.addEventListener("input", function() { validateField("hasloPowtorz", haslo.value === hasloPowtorz.value, "Passwords do not match."); });
    hasloPowtorz.addEventListener("blur", function() { validateField("hasloPowtorz", haslo.value === hasloPowtorz.value, "Passwords do not match."); });

    document.getElementById("myForm").addEventListener("submit", function(event) {
        clearErrors();

        if (!imie.value || !nazwisko.value || !mail.value || !haslo.value || !hasloPowtorz.value) {
            displayError("Please fill in all fields.");
            event.preventDefault();
            return;
        }

        if (!checkLetterCount(imie.value, 3)) {
            displayError("Imie must have at least 3 letters.", "imie");
            event.preventDefault();
            return;
        }

        if (!checkLetterCount(nazwisko.value, 3)) {
            displayError("Nazwisko must have at least 3 letters.", "nazwisko");
            event.preventDefault();
            return;
        }

        if (!validateEmail(mail.value)) {
            displayError("Invalid email format.", "mail");
            event.preventDefault();
            return;
        }

        if (!checkPasswordStrength(haslo.value)) {
            displayError("Password is too weak. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.", "haslo");
            event.preventDefault();
            return;
        }

        if (haslo.value !== hasloPowtorz.value) {
            displayError("Passwords do not match.", "hasloPowtorz");
            event.preventDefault();
            return;
        }
    });

    function checkLetterCount(value, count) {
        return value.length >= count;
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function checkPasswordStrength(password) {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password);
    }

    function clearErrors() {
        document.getElementById("imieError").textContent = "";
        document.getElementById("nazwiskoError").textContent = "";
        document.getElementById("mailError").textContent = "";
        document.getElementById("hasloError").textContent = "";
        document.getElementById("hasloPowtorzError").textContent = "";
    }

    function displayError(message, fieldId) {
        var errorElement = document.getElementById(fieldId + "Error");
        if (errorElement) {
            errorElement.textContent = message;
        } else {
            alert(message);
        }
    }
});

class Samochod {
    constructor(marka, model, rokProdukcji, kolor, predkosc = 0) {
        this.marka = marka;
        this.model = model;
        this.rokProdukcji = rokProdukcji;
        this.kolor = kolor;
        this.predkosc = predkosc;
    }

    zwiekszPredkosc(wartosc) {
        this.predkosc += wartosc;
        return this.predkosc;
    }

    zmniejszPredkosc(wartosc) {
        this.predkosc -= wartosc;
        if (this.predkosc < 0) this.predkosc = 0; 
        return this.predkosc;
    }

    informacje() {
        return `${this.marka} ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc} km/h`;
    }
}


let samochod = new Samochod('Dodge', 'Challenger', 2022, 'Czerwony');

console.log(samochod.informacje()); 

samochod.zwiekszPredkosc(500);
console.log(samochod.informacje()); 

samochod.zmniejszPredkosc(20);
console.log(samochod.informacje()); 

samochod.zmniejszPredkosc(40);
console.log(samochod.informacje()); 


let listaSamochodow = [
    new Samochod('Toyota', 'Corolla', 2020, 'Czerwony', 60),
    new Samochod('Ford', 'Focus', 2018, 'Czarny', 80),
    new Samochod('Volkswagen', 'Golf', 2019, 'Biały', 70),
    new Samochod('BMW', 'X5', 2021, 'Srebrny', 100),
    new Samochod('Audi', 'A4', 2017, 'Niebieski', 90)
];


let sumaPredkosci = 0;
listaSamochodow.forEach(samochod => {
    sumaPredkosci += samochod.predkosc;
});
let sredniaPredkosc = sumaPredkosci / listaSamochodow.length;
console.log("Średnia prędkość samochodów:", sredniaPredkosc.toFixed(2), "km/h");


let rokProdukcji = 2019; 
let samochodyWWybranymRoku = listaSamochodow.filter(samochod => samochod.rokProdukcji === rokProdukcji);
console.log(`Samochody wyprodukowane w roku ${rokProdukcji}:`);
samochodyWWybranymRoku.forEach(samochod => {
    console.log(`${samochod.marka} ${samochod.model}`);
});

document.addEventListener("DOMContentLoaded", function() {
    const imieInput = document.getElementById("imieInput");
    const nazwiskoInput = document.getElementById("nazwiskoInput");
    const dodajButton = document.getElementById("dodajButton");
    const tabelaBody = document.getElementById("tabelaBody");

    dodajButton.addEventListener("click", function() {
        const imie = imieInput.value.trim();
        const nazwisko = nazwiskoInput.value.trim();

        if (imie !== "" && nazwisko !== "") {

            const row = tabelaBody.insertRow();
            const cellImie = row.insertCell(0);
            const cellNazwisko = row.insertCell(1);


            cellImie.textContent = imie;
            cellNazwisko.textContent = nazwisko;

            imieInput.value = "";
            nazwiskoInput.value = "";
        } else {
            alert("Proszę wypełnić oba pola.");
        }
    });
});

