

function sum ()
{
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    let converted1 = parseFloat(number1);
    let converted2 = parseFloat(number2);

    let summation = converted1+converted2;
    let subtraction = converted1-converted2;
    let multiplication = converted1*converted2;
    let divition = converted1/converted2;

    document.getElementById('summation').innerHTML = "The result is: "+summation;
    document.getElementById('subtraction').innerHTML = "The result is: "+subtraction;
    document.getElementById('multiplication').innerHTML = "The result is: "+multiplication;
    document.getElementById('divition').innerHTML = "The result is: "+divition;

}



function sub ()
{
    let age = document.getElementById("ageInput").value;
    // let message = document.getElementById("message");

    if (age >= 18){
       document.getElementById('message').innerHTML = "আপনি ভোট দিতে পারবেন ✅"+age;
    }

    else {
       document.getElementById('message').innerHTML = "দুঃখিত, আপনি এখনও ভোট দেওয়ার উপযুক্ত নন ❌";
    }
} 
