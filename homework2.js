

//დავალება1.შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
//2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function numbersN(...n){
  let nSum=0;
 for(let x of n){
     if(x>0){
      nSum=nSum+x;
     }
 }
 return nSum;
}

   let N=numbersN(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
   console.log(N);
                                                    

// დავალება2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:

function myfunction(...N){
  let mynumbers=0;
  
for (let y of N ){
      mynumbers=mynumbers+y;
  }
       return mynumbers;
  }
  
  let func= myfunction(10, 50, 6, 7, 8, 11, 6, 3, 9)
  console.log(func);
  

//დავალება3. 
  let user = {
   firstname: 'giorgi',
   lastname: 'saakadze',
    age: 32,
isloggedin: true
   
  }
  
  //ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
  
      function username(){
        if(user.isloggedin==true){
          console.log(user.firstname+ " "+user.lastname);
        }
         if (user.isloggedin==false)
       console.log(false);
      }
                 
                           username();



//დავალება4. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:


//ვარიანტი1:
function largestElements(numbers) {
  let X = 0;
  for (let i = 0; i < numbers.length; i++) {
      let element = numbers[i];
if (element > X) {
          X = element;
      }
  }
  return X;
}
let numbers = [2, 3, 4, 8, 5, 2, 4];
console.log(largestElements(numbers));




//ვარიანტი2:
let array = [11, 19, 6, 7, 8, 9, 10];
X = 0;

array.forEach((elements) => {
  if (X < elements) {
    X = elements;
  }
})
console.log(X);


//ვარიანტი3:

let maximum = Number.MIN_SAFE_INTEGER;
let array2 = [-3, -2, 217, 9, -8, 46,500];
array2.forEach(function(value){
  if(value > maximum) {
    maximum = value;
 }
});

console.log(maximum); 

//ვარიანტი4:

const array1 = [1, 3, 2,8,9,10,15,109];

console.log(Math.max(...array1));