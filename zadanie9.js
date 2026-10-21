var obiekt1 = {
    nazwa:"Laptop",
    waga:2.1,
    cena:3500
};

var obiekt2 = {
    nazwa:"Smartfon",
    waga:0.19,
    cena:2200
};

var suma = obiekt1.waga + obiekt2.waga


document.write("<br>")
document.write("Obiekt numer 1 nosi nazwę:" + obiekt1.nazwa);
document.write("<br>")
document.write("Obiekt numer 2 nosi nazwę:" + obiekt2.nazwa);
document.write("<br>")
document.write("Oba obiekty w sumie ważą:" + suma + "kg")
document.write("<br>")
if (obiekt1.cena > obiekt2.cena) 
    {
    document.write("Droższym z nich jest obiekt nr: 1")
    }
else if (obiekt2.cena > obiekt1.cena) 
    {
    document.write("Droższym z nich jest obiekt nr: 2")
    }
else {
document.write("Obiekty kosztują tyle samo")
    }