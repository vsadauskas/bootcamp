// 2017-07-17 java script
// console.log("Hello world");
//alert(x);
// var x = "Hello world";
// alert(x);

//Kintamojo deklaracija
// var x;

// //Priskirimas
// var x=5;
// var y="kabutemis apglebtas tekstas";
// var z= true;

// console.log(x);

//funkcija typeof parododo kokio tipo yra kintamasis, tam kad isvesti tipa reikia isimsti i console.log funkcija.

// var x = "30";
// console.log(typeof(x));

// //Js yra casesencitive, todel svarbu i tai atkreipti demesi, nes x ir X skiriasi.
// var abc = "Paulius";
// var Abc = "Algimantas";
// console.log(abc + ' ir ' + Abc); 


// var myNumber = 123; // dazniausiai naudojamas camel casingas
// var ourNumber = 234;
// var theirNumber = 255;

// var myNumber = 123, 
//     ourNumber = 234, 
//     theirNumber = 255;

/*
Ilgas 
keliu eiluciu komentaras
*/

// vienos eilutes komentara

//tekstiniu eiluciu savybes
// var text = "Zodis greitas";

// console.log(text.length); //isveda tekstines eilutes ilgi, daugiausia naudojamas cikluose.
// console.log(text.toUpperCase()); // eilute padaro didziosiomis raidemis, toLowerCase mazosiomis.
// console.log(text.charAt(1)); // izves antra stringo raide, indeksuoja pradedant nuo 0.
// console.log(text.indexOf("gr")); // isvada indeksa nuo kurio prasideda gr.
// console.log(text.replace("yra", 'buvo'));

// text = text.replace("yra", 'buvo'); //pakeiciam kintamojo paremetra.

// console.log(text.substring(6)); //galima isivesti ir pabaigos taska iki kurio kerpama, ar tik pradzios taska.
// console.log(text.substr(6,3)); //anras parametras yra ne galutinis taskas o tiek kiek simboliu norime paimti

// //Metodai su skaiciais
// var q = 12.14;
// console.log(parseInt(q)); //isima sveikaji skaiciu, antras parametras galima isvesti koduote kuria norime isvesti duomenis
// console.log(q.toString()); //skaicius tampa tekstine eilute
// console.log(q.toFixed(3)); //grazina sveika suapvalinta skaiciu, skaitine reiksme nurodo kiek skaiciu po kablelio apvalinti
// console.log(q.toPrecision(2)) //grazina suapvalinta skaiciu tiek iek nurodoma skaiciuojant nuo skaitmens pradzios

//logines reiksmes
// var a = 2,
//     b = 4;

// var rel = (a==b);
// console.log(rel);

// = priskirimo operatorius
// == ir === palyginimo operatorius
// == tikrina tik reiksme, netikrina kintamuju tipu 
// === tikrina ir reiksme ir kitnamuju tipa
//lyginimo operatoriuau
// >
// >=
// <
// <=
// !=
// !==
// console.log(Boolean(a));
// is pacio kintamojo galima sugeneruoti false rieksmes tik keliais atvejais:
// 1. undefined kintamasis - kuriam nepriskirta reiksmes
// 2. NaN (not a number)
// 3. tuscia eilute ''
// 4. nulis 0
//siuos keturis atvejus butina prisiminti, nes bus naudojama.


//UZDUOTIS

// Šiuo metu Lietuvoje yra 26 laipsniai pagal Farenheitą,
// naudodamiesi JavaScript apskaičiuokite kokia temperatūra yra pagal Celsijų.

// Būtinos sąlygos:
// - Turime "string" kintamąjį su tekstu "Lietuvoje šiuo metu laipsnių pagal Celsijų"
// - Negalima rašyti jokio papildomo teksto
// - Temperatūra pagal Celsijų turi būti nurodyta vienas skaičius po kablelio
// - Temperatūra turi būti konvertuojama iš Farenheito į Celsijų
// - Rezultatą išvesti konsolėje

// Rezultatas:
// Lietuvoje šiuo metu -3.3 laipsnių pagal Celsijų

// var eilute = 'Lietuvoje šiuo metu laipsnių pagal Celsijų';
// var konvertuotas = (26 - 32)* 5 / 9;
// konvertuotas = konvertuotas.toFixed(1);
// console.log(eilute.substr(0,19) + " " + konvertuotas.toString() + " " + eilute.substr(20));


//*********************************************************************************/
// 2017-07-18 JAVASCRIPT ANTRA DALIS                                               /
//*********************************************************************************/


//Masyvas
// var myArray = ['Deimante', 'Rimgaile', 'Elvyra', 'Loreta']; //tuscias masyvas
// var students = myArray;

// console.log( myArray[2] );
// myArray[2] = 'Živilė';
// console.log(myArray);
// console.log(myArray[2].length);
// console.log(myArray.length);
// console.log(students);

// //Masyvas masyve
// var girls = [1, "text", true, [1, 2, 3]];
// console.log(girls[3][2]); //masyvo duomens pasiekimas
// var girls = ['Deimante', 'Rimgaile', 'Elvyra', 'Loreta'];
// console.log(girls.reverse());
// console.log(girls.sort());
// console.log(girls.sort().reverse());

// // tekstines eilutes iskaidymas i masyva
// var text = 'Čia gali būti jūsų reklama',
//     myArray = text.split(' ');
// console.log(myArray);

//Objektai
// var pcm = {}; //tuscias objektas
// var pc = {
//     gamintojas: 'Lenovo',
//     kiekis: 3,
//     spalvos: ["juoda", "pilka"],
//     "ar yra" : true
//     // indeksas: reiksme, kartais inekso pavadinimas gali buti apsklaudziamas kabutemis
// }
// console.log(pc);
// // kaip pasiekti objekto reiksme
// console.log(pc.gamintojas);
// console.log(pc.spalvos);
// console.log(pc["ar yra"]); //kitas pasiekimo budas kaip per masyvo bracketus
// // i objekta galime ideti kita objekta ir ar masyva ir i masyva galima ideti objekta

// var pca = {
//     gamintojas: 'Lenovo',
//     kiekis: 3,
//     spalvos: {
//         pagrindine: 'juoda',
//         papildoma: 'balta',
//         },
        
//     "ar yra" : true
// }
// console.log(pca);


//Operatoriai


//Tik sudeties operatorius veikia su skirtingais rusies kintamaisiais
// var a = 24,
//     b = 10;
//     c = "krabas";

// console.log(a+b);   
// console.log(a-b);   
// console.log(a*b);   
// console.log(a/b);   
// console.log(a % b); // 24/10 sveika dalis du o likutine verte 4. siuo atveju grazintu likuti   
// console.log("Mano amzius " +a);
// console.log(a+b+c);
// console.log( a - c );

// a = a + b;
// console.log(a);
// //trumpiau
// a += b;

// //loginiai operatoriai

// var trueVar=true,
//     falseVar= false;

// // && and visos reiksmes turi grazinti true

// console.log(true && false); //false
// console.log( true || false); // true
// console.log(!trueVar); //Not

// // Salyginiai sakiniai
// // naudojami labai daznai ir placiai

// var result = 9;

// if (result >= 9 ) {
//     console.log("Šaunuolis pirmūne  ");
// }
// else if(result <= 8 && result >=5 ) {
//      console.log('neblogai studente');
// }
// else {
//     console.log('bandyk dar karta');
// }

// //switch

// var string = "Jusu ivertinimas: ";
// switch (result){
//     case 10:
//         console.log(string+result);
//         break;
//     case 9:
//          console.log(string+result);
//          break;
//     default:
//          console.log("bandykite dar karta");
// }

// var students = ['Loreta', 'Rimgaile', "Deimante"];

// for (var i=0; i < students.length; i++ )
//     {
//         console.log(students[i]);
// }
// //visi for statementai yra neprivalomi gali buti for(;;), galima 

// var weather = {
// "Pirmadienis": -5,
// "Antradienis": -15,
// "Treciadienis": 32
// },
// weatherKeys = Object.keys(weather); //masyvas su objekto indeksu reiksmem
// var key= "";
// for (var i=0; i < weatherKeys.length; i++){
//     key = weatherKeys[i];
//     console.log(key +': '+weather[key] );

// }

// //for in isvedimo is objekto variantas
// for (key in weather) {
//     console.log(key +': '+weather[key] );
// }

// var i = 0;

// //while ciklas..

// while (i < 3) {
//     console.log(i);
//     i++;
// }

// //shorthand if
// var trueVar = true;
// trueVar ? console.log('taip') : console.log('ne');
// //butinos abi dalys ir jei true ir jei false salyga

// UZDUOTIS NR.2

// Įmonė nori įsigyti 2 baltus arba juodus tos pačios rūšies kompiuterius (būtinai vienos spalvos), kurių bendra kaina neviršytų 1600 €. Sugeneruokite sąrašą kompiuterių, kuriuos galite pasiūlyti.

// Masyvas su objektais:

// var pcs = [
// 	{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
// 	{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
// 	{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
// 	{ "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
// 	{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
// 	{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
// 	{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
// ];

// Būtinos sąlygos:
// - Panaudokite bent po vieną ciklą ir sąlyginį sakinį,
// - Rezultatas išvedamas konsolėje,
// - Line break naudokite "\n",
// - Spalvų pavadinimai (balta, juoda) negali būti naudojami kaip naujas tekstas.

// Rezultatas turėtų atrodyti taip:

// Galimi variantai:

// Modelis: hp monstras
// Kaina: 1600
// Spalvos: juoda

// Modelis: dell apskritimas
// Kaina: 1394
// Spalvos: balta

// Modelis: acer peizažas
// Kaina: 1240
// Spalvos: balta ir juoda

//sprendimas

// var pcs = [
// 	{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
// 	{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
// 	{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
// 	{ "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
// 	{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
// 	{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
// 	{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
// ];

// var tinkamosSpalvos = "";

// console.log("Galimi variantai: ");
// for (var i = 0; i < pcs.length; i++) {
//     if(((pcs[i].kaina * 2) <= 1600) && ((pcs[i].spalva.balta >=2) || pcs[i].spalva.juoda >=2)) {
//       console.log("Modelis: " + pcs[i].modelis + "\n");
//       console.log("Kaina: " +pcs[i].kaina * 2 + "\n" );
//       var colors = Object.keys(pcs[i].spalva);
//       tinkamosSpalvos = "";
//       for (j=0; j < colors.length; j++){
//           if (( (colors[j] == "juoda") && (pcs[i].spalva.juoda >=2)) || ((colors[j] == "balta") && (pcs[i].spalva.balta >=2))){
            
//             tinkamosSpalvos = tinkamosSpalvos + colors[j]+", ";
//           }
//       if (tinkamosSpalvos){
//         console.log("Spalvos: " +tinkamosSpalvos);  
//       } 
        
        
      
//         }
      
//     }
// }        

// 
// 2017-07-19 MINDAUGO UZDUOTIES SPRENDIMAS
// 

// var vnt = 2,
//     biudzetas = 1600;
// console.log("Galimi variantai: \n\n");

// for (var i=0; i < pcs.length; i++){
//   if( ((pcs[i].spalva.juoda >= vnt) || (pcs[i].spalva.balta >= vnt)) && (pcs[i].kaina * vnt <= biudzetas) ) {
// var spalvos = Object.keys(pcs[i].psalva),
//     spalva = '';

//     for(var j=0; j<spalvos.length; j++){
//       if( (spalvos[j] === 'juoda') && (pcs[i].spalva.juoda >= vnt) || (spalvos[j] === 'balta') && (pcs[i].spalva.balta >= vnt) ){

//         if(spalva.length >0){
//         spalvos += ' ir ' + spalvos[j];
//         }
//         else {
//           spalva = spalvos[j];
//         }
//       }


//     }
//     console.log('Modelis: '+pcs[i].modelis + "\nKaina: " + pcs[i].kaina * vnt + "\Spalvos: "+ spalva);

//   }
// }
//
// FUNKCIJOS
//
// function hello() {
// 	console.log('Hello world');
// }

// hello();

// var result = 0;
// function helloo() {
// 	result = 10 + 15;

// 	return result; //return grazina funkcijos veiklos rezultata
// }
// helloo();
// console.log(result);
// // funkcijos su parametrais
// var rezultatas = 0;
// function sum(a, b){
// 	rezultatas = a + b;
// 	return rezultatas;
// }
// sum(2, 12);
// console.log(rezultatas);
// rekomenduoja kuo smulkesnes funkcijas rasyti, kad jos darytu tik po viena veiksma, pavadinimai turi buti
// pakankamai aiskus, kad pagal pavadinima butu aisku ka ta funcija daro.

// var name ="vilius šomka";

// console.log(firstUpperChar(name));

// function firstUpperChar(string){
//  var words = string.split(" ");
//  for (i=0; i<words.length; i++){
// 	 words[i] = convertChar(words[i]);
// 	   }
// return words.join(" ");
// 	}

// function convertChar(word){
//  var output = []; //sukuriamas masyvas
//  output[0] = word.charAt(0).toUpperCase();
//  output[1] = word.substring(1);
//  var result = output.join('');
//  return result;
// }

// // objektu konstruktorius
// var fullName = function(a, b){
//   this.fistName = a;
//   this.lastName = b;
//   };
// var vilius = new fullName("Vilnius", "Šomka");
// console.log(vilius);
// var mindaugas = new fullName("Mindaugas", "Degutis");
// console.log(mindaugas);

// //savarankiska uzduotis sukurti funkcija su tvarkinga seka ir atliktu uzduoti, prikaisiota kabliuku.

// //global / local scope

// //pvz failo virsuje
// var name = "abc",
// 	nr = 12; //globalus kintamieji
	

// function pvz(){
// 	var i = 0; //local scope

// }
// pvz();

// // kintamuju apsaugojimas
// var password = "123456",
// 	sasNr = "LT1212345878531";
	
// // apsaug kintamuosius ir finkcijas nuo globalios srities
// //funkcija parasideda pirmoje, baigiasi paskutineje eiluteje
// (function(){
// // cia eina kodas
// }());



// Turime masyvą, kuriame yra trumpos tekstinės eilutės (pateikta apačioje). Mūsų užduotis:
// 1. Sukurti funkciją, kuri rastų ilgiausią žodį tekstinėje eilutėje
// 2. Panaudojant šią funkciją išvesti kiekvienos eilutės ilgiausią žodį (rezultatas turi būti viena tekstinė eilutė)
// 3. Išvedant žodžius panaudoti tarpą tarp žodžių
// 4. Išvedimas turi būti dinamiškas (pasikeitus masyve esančių eilučių skaičiui - vis tiek gautume kiekvienos eilutės ilgiausią žodį)
// 5. Rezultatą išvesti konsolėje

// Masyvas
// var posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];

// //funkcija ilgiausiam zodziui tekstineje eiluteje isekoti;
// function ilgiausias(string){
// 	//ivesta eilute splitinam i zodziu masyva
// 	var zodziai = string.split(' ');
// 	// susikuriam masyva zodziu ilgiams laikyti, ji uzpildom
// 	var ilgiai = [];
// 	for ( var j=0; j < zodziai.length; j++){
// 		ilgiai[j] = zodziai[j].length
// 		}
//     // maksimalaus iglio ir  jo indekso masyve paieska
// 	var maxIlgis = 0;
// 	var maxIlgioIndeksas = -1; 
// 	for (var k = 0; k <ilgiai.length; k++) {
//     if (ilgiai[k] > maxIlgis){
// 		maxIlgis = ilgiai[k];
// 		maxIlgioIndeksas = k;
// 	}
// 	}
// 	//graziname ilgiausia zodi
// 	return zodziai[maxIlgioIndeksas];
// }

// // judam per masyvą ilgiausius zodzius pridedam prie atsakymo eilutes
// var atsakymas = "";
// for (var i=0; i<posts.length; i++){
// 	atsakymas += ilgiausias(posts[i]) + ' ';
// 	}
// // isvedam atsakyma
// console.log(atsakymas);

//***************************************************************** */
// 2017-07-20 
//****************************************************************** */

//uzdavinio aptarimas

// var posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"],
// result = "";

// for (var i=0; i<posts; i++){
//     result += longestWord(posts[i]) + " ";
// }


// console.log(longestWord(posts[0]));

// function longestWord(string){
// var stringArray = srting.split(" ");
// var longest = "";
// for(var i=0; i<stringArray.length; i++){
    
//     if( stringArray[i].length > longest.length){
//         longest = stringArray[i];
//     }
// }
// return longest;
// }

//DOM document object model arba kitaip hmtl struktura
//

// var itemID = document.getElementById("main");
// console.log(itemID);
// itemID.innerHTML="<span>wow</span>";

// var itemClass = document.getElementsByClassName(section);
// var itemClass2 = document.querySelectorAll(".section"); //viduje rasomas selektorius, panasus kaip css
// var item = document.querySelectorAll(".list > *");

// // jei norime pakeisti kazka klasiu listui turime naudoti cikla
// for(var i=0; i<item.length; i++){
//     item[i].style.fontSize = "25px";
// }
// for(var i=0; i<item.length; i++){
//     item[i].className = "list-item";
// }
// //ivykiai ir stilizavimas - peles ir touchpado eventai, klaviaturos evantai
// document.getElementById("main").addEventListener("mouseover", function (){
//     alert("Nepaspausi: ");
// });
// // stilizuoti elementus geriau per css puse, ne per JS. stilizuoti pridedant klase i css ir i html

//JQuerry rasoma dviem budais arba pavadimnima JQuerry ar $ zenkla priekyje

// $(document).ready(function(){
//  $("#item").css("background-color", "#000");
//  $(".item >* ").css("background-color", "#000"); //galima rasyti visiskai normalius css parametrus
// });
// // galima surasyti ir pakeisti kazkurio id stiliu, jei pritaikysim standartinius parametrus js faile
// // jie kartais gali neprisitaikyti, nes kraunant html dom gali tuo pat metu ir js failas krautis, kartaits
// // js gali uzsikrauti greiciau nei html todel ready eventas laukia kada uzsikraus html domas, tik tada vykdomas
// // kodas esantis funkcijos viduje.
// // css funkcijos Mindaugas siulo nenaudoti, cia parodyta kaip pavyzdi

// // taip pat galime imti pagal klase ir atributus

// //stilizavimas 
// var item =$('p').closest(".items").css("background-color");
//  // Turinio keitimas ir pridejimas, turini desime nes is JS 
// // .append
// // .prepend
// // .html

// $('a').click(function(){
//     $('.items').addClass('active'); // dar yra removeClass, toggleClass    
// });


// //************************************************************************************/
// //2017-07-21 ECMAscript
// //************************************************************************************/

// // naujai atsirado konstantos. 
// //const a = 2; funkcijoje ta pati konstatna gali tureti ir kitokia reiksme.
// //keywordas let. 
// var a = 2;
// function awesome (){
//     var a = 5;
// }
// awesome();
// console.log(a);

// if (a) {
//     let a = 5  // a bus kintamasis lygus 5 tik salygos viduje.
// };
// console.log(a);
// //funkciju standartiniai parametrai jei vartotojas ju nenurodo, juos galima priskirti deklaruojant funkcija
// // jei vartotojas kviecia funkcija be parametru, funkcija naudoja standartinius parametrus
// function sum(a=2, b=3){
//     return a+b;
// }
// // spread operatorius
// // jei norime papildyti masyva reikšmemis JS galim naudoti spreada tris ta6kus ...

// var tempArray = [1, 2, 3];
// var finalArray = [...tempArray, 4, 5, 6];

// function sum(a,b){
//     return a + b;
// }
// var numbers = [5,15];
// console.log( sum(...numbers) );

// // template string 
// function shop(item, price){
//  return `${item} kainuoja ${price *3} eur`;
// }
// console.log( shop("Kriaušė",2));

// //Objektu prapletimai

// var age = 27;
// var myObject = {
//     age, // ineksui age priskirs globalu kintamaja age
//     log(x=89){
//         return `Mano amzius yra ${x}`;
//     }
// };
// console.log(myObject.log(myObject.age));

// //tekstiniu eiluciu nauji metodai ir funkcijos

// var text = 'Pomidoras';
// console.log(text.repeat(2)); // kartoja eilute
// console.log(text.startsWith('P')); // tekstas prasideda raide P grazina true, kitu atveju false

// //sets. duomenu grupė, savyje negali tureti savyje dublikatu, jei dar karta pridesime ta pati, jis tiesiog neprisides.

// var students = new Set();
// students.add('Paulius').add('Algimantas').add('Vilius');
// students.delete('Vilius');
// students.clear();

// console.log(students.has('Ieva')); //grazina ture arba false
// console.log(students.size);

// var students = ['Paulius', 'Algimantas','Vilius','Vilius','Vilius','Vilius','Vilius'],
// uniqueStud = new Set(students);

// students = [...uniqueStud];


//Schema Seo. Puslapio autoritetas
//SEO puslapio. buna vidinis ir isorinis. uz vidini seo atsakingi programuotojai.
//domeno autoriteta sudaro:
//Unikalus turinys, kelia puslapio prioriteta.
//Keywordai nera tokie svarbus, nebent jie panaudoti straipsnyje
//
//Kiekvieno puslapio title yra labai svarbu, nes kiekvienas polapis turetu turteti savo title
//per visa puslapi naudojasmas vienas h1
//stilius, javascritp paieskos vorai neskaito.
// dar keli atnaujinai is google atejo. 1. responsive design, puslapis pritaikomas mobiliems irenginiams, jei tinklapis
// pritaikytas mobiliems irenginiams, jie gauna prioriteta is mobiliuju irenginiu.
// 2. https protokolas

