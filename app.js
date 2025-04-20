let age = prompt("Welcome to Keyless Car \n Please Enter your age: ");
if(age<18){
    alert("Sorry, You are too young to drive this car. Powering OFF");
}
else if(age==18){
    alert("Congratulation on your first year of driving. Enjoy the ride!");
}
else if(age>18){
    alert("Powering ON. Enjoy the ride!");
}
else{
    alert("Please enter a valid age.");
}