const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumberButton = document.querySelector('#check-number');
const outputBox = document.querySelector('#output-box');


function compareValues(sum, luckyNumber){
    if( sum % luckyNumber == 0){
        outputBox.value = "yes, it is lucky";
    }else{
        outputBox.value = "Sorry, it is not lucky";

    }
}

function checkBirthdayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if( sum && dob){
        compareValues(sum, luckyNumber.value);
    }else{
        outputBox.value = "Enter both the values";

    }

}

function calculateSum(dob){
    dob = dob.replaceAll("-", "");
    let sum = 0;

    for( let i =0 ; i< dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkNumberButton.addEventListener('click', checkBirthdayIsLucky)