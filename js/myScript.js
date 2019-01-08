/*

var Hello = "Hello" + " World " // var is reserve keywords

                          //Hello is name of the variable

                          //"HelloWorld" is the value
alert(Hello)
*/


// Objects and Arrays
// Array of Object


/*
var student = [{

"s_name": "Shouvik",
"s_roll" : 1628410070,
"s_college" : "Uit",
"s_fees" : "40000"
},
{
  "s_name": "Varun",
  "s_roll" : 1628410087,
  "s_college" : "Uit",
  "s_fees" : "40000"
}]

var s_info = [student[0].s_college,student[1].s_fees];
console.log(s_info[1]);
console.log(s_info[0]);

*/

//Swapping variable

/*

var a = window.prompt("Enter Value of A: ");
var b = window.prompt("Enter Value of B: ");


console.log("Value of a: ",a)
console.log("Value of b: ",b)

a = a * b;
b = a / b;
a = a / b;

console.log("Swaped Value of A: ",a);
console.log("Swaped Value of B: ",b);

a = Number(a);
b = Number(b);

alert(a)
alert(b)

*/

// === Equal value and type

// Working wit typeof

/*

var object = {"SDG":"Me","KDG":"Sister","PDG":"Mother"}
var array = ["Me","Sister","Mother"]

console.log(typeof(object));
console.log(typeof(array));

console.log(Array.isArray(array));

*/

// ###########***CONDITIONAL STATEMENTS***#############

/*

var itemPurchased = window.prompt('Please tell me number of item Purchased')

itemPurchased = (itemPurchased>3)?'You have promo code':'You are not eligible'

alert(itemPurchased)

*/

// ################*** LOOPS IN JAVASCRIPT ***##############

/*
var i = 1;

for(i=1;i<=10;i++)
{
  console.log(i)
  alert(i)
}
*/

var names = ["SDG","VARUN","SHIVAM","YASH"]
var i = 0
/*
for(i=0;i<names.length;i++)
{
  document.write(" ",names[i])
  console.log(names[i])
  alert(names[i])
}
*/

/*
while(i<names.length)
{
  console.log(names[i])
  i++
}
*/

var searchFriends = window.prompt("Enter your Friend Name")

for(i=0;i<names.length;i++)
{
  if(names[i] == searchFriends)
  {
    alert(names[i] + " found at postion " + Number(i+1))
    console.log(names[i] + " found at postion " + Number(i+1))
    break;
  }
}
