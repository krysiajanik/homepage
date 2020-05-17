console.log("Hello there");
console.log("General Kenobi!");
console.log("Witaj strudzony przybyszu. Internet to miejsce dziwne, ale wspaniałe. A najlepszym, co może Cię spotkać w Internecie, są memy. Jeśli podzielasz to zdanie, zapraszam na podstronę Memes.");

//Praca domowa - utworz funkcję powitalną, jako parametr niech przyjmuje imię i wiek

const hello = (name, age) => {
    console.log(`Mam na imię ${name} i mam ${age} lat, a Ty?`);
    console.log(`psst, żeby się przywitać wpisz: sayHello("TwojeImię", TwójWiek) i wciśnij enter:)`);
};

let helloKrysia = hello("Krysia", 26)


const sayHello = (name, age) => {
    console.log(`Cześć Krysia, ja mam na imię ${name} i mam ${age} lat!`);
};
