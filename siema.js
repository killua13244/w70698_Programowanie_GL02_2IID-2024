
function zmienTekst() {
    document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!";
    alert("Witaj na stronie");
    for (let step = 0; step < 100; step++) {
        if(step % 2 == 0){
        console.log(step);
    }
      }
    let a = prompt("1 liczba: ");  
    let b = prompt("2 liczba: "); 
    document.getElementById("dod").innerHTML = parseInt(a) + parseInt(b);
    setInterval(function() {
        const now = new Date();
        document.getElementById("czas").innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }, 1000);
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
rand = getRandomInt(0, 100)
iprob = 0
function gra() {
    const input = document.getElementById("myInput");
    const inputValue = input.value;
    console.log(inputValue);
    console.log(rand)
    if(rand>inputValue){
        alert("twoja liczba jest mniejsza")
        iprob++
    }
    if(rand<inputValue){
        alert("twoja liczba jest wieksza")
        iprob++
    }
    if(rand==inputValue){
        iprob++
        alert(`gratulacje!!! ilosc prob: ${iprob}`)
        window.location.reload();
    }
}