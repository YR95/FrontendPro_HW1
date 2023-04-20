imputName = prompt("What is your name? ", "input your name");
if (imputName===""|| imputName==="input your name"){
    imputName = prompt("Enter your name! ", "Jonh");
    alert("Hello, " + imputName + ". How are you?");
}
else {
    alert("Hello, " + imputName + ". How are you?");
}