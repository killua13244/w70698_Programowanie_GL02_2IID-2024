function Ksiazka(tytul, autor, rok) {
    this.tytul = tytul;
    this.autor = autor;
    this.rok = rok;
    this.full = function(){
        return this.tytul + " - " + this.autor + " (" + this.rok + ")";
    };
}

function Student(imie, nazwisko, nralbumu, o1, o2, o3) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.nralbumu = nralbumu;
    this.o1 = o1;
    this.o2 = o2;
    this.o3 = o3;
    this.srednia = function(){
        return (o1 + o2 + o3)/3;
    };
}

function Auto(marka, model, rok, kolor, predkosc, zwz, zmz) {
    this.marka = marka;
    this.model = model;
    this.rok = rok;
    this.kolor = kolor;
    this.predkosc = predkosc;
    this.zwz = zwz
    this.zmz = zmz
    this.wiek = function(){
        r = new Date().getFullYear()
        return r-rok;
    }
    this.zw = function(){
        return predkosc+zwz;
    }
    this.zm = function(){
        return predkosc-zmz;
    }
    this.full = function(){
        return marka + " " + model + " (" + rok + ") " + "Kolor: " + kolor + " Predkosc: " + predkosc;
    };
}

function Prostokat(b1, b2) {
    this.b1 = b1;
    this.b2 = b2;
    this.czykw = function(){
        if(b1==b2){
            return "True";
        }   
        else{
            return "False";
        }   
    }
    this.obwod = function(){
        return (2*b1)+(2*b2);
    }
    this.pole = function(){
        return b1*b2;
    };
}



const ksiazka = new Ksiazka("ta", "bard", 2000);
const prostokat = new Prostokat(6, 9);
const student = new Student("ta", "elo", "w30", 3, 5, 6);
const auto = new Auto("bmw", "e36", 2000, "zolty", 69, 30, 60)
console.log(ksiazka.full());
console.log(student.srednia());
console.log(auto.full())
console.log(auto.zw())
console.log(auto.zm())
console.log(auto.wiek())
console.log(prostokat.pole())
console.log(prostokat.obwod())
console.log(prostokat.czykw())
function elo(){
    let prb1 = parseInt(document.getElementById("b1").value)
    let prb2 = parseInt(document.getElementById("b2").value)
    const pr = new Prostokat(prb1, prb2)
    console.log(pr.pole())
    console.log(pr.obwod())
    console.log(pr.czykw())
}