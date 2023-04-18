function TemperatureInDescendingOrder() {
const temp1 = prompt("Enter first temperature: ");
const temp2 = prompt("Enter second temperature: ");
const temp3 = prompt("Enter third temperature: ");

if(temp1 >= temp2 && num1 >= temp3) {
    if (temp2> temp3) {
        console.log(temp1 + "," + temp2 + "," + temp3 )
    }else{
       console.log(temp1 + ","  + temp3 + "," + temp2)
    }
}
else if (temp2 >= temp1 && temp2 >= temp3) {
    if (temp1>temp3) {
        console.log(temp2+ ","  +  temp1+ "," + temp3)
    }else{
        console.log(temp2+ ","  + temp3 + "," + temp1)
    }
}
else {
    console.log(temp3 + "," + temp2  + "," +  temp1)
}
}
temperatures();


