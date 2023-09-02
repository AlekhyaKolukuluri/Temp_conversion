let btnEle = document.getElementById("ConvertBtn");
let paraEle1 = document.createElement("p");
let paraEle2 = document.createElement("p");
let divEle = document.getElementById("paraDiv");

paraEle1.classList.add("Para");
paraEle2.classList.add("Para");


btnEle.onclick = function() {
    let inputEle = document.getElementById("celciusData").value;
    let inputValue = parseFloat(inputEle);
    let fahrenheit = (inputValue * 9) / 5 + 32;
    let kelvin = inputValue + 273.15;

    if (inputEle === "") {
        alert("Please enter the temperature....");
    } else if (isNaN(Number(inputEle))) {
        paraEle1.textContent = "Please enter Integer or Float numbers only...";
        paraEle1.style.color = "red";
        divEle.appendChild(paraEle1);
        paraEle2.textContent = "";
    } else {
        let spanEle = document.createElement("span");
        spanEle.textContent = "&#176;";
        paraEle1.textContent = "The given temperature in fahrenheit is " + fahrenheit;
        paraEle1.style.color = "black";
        divEle.appendChild(paraEle1);
        paraEle2.textContent = "The given temperature in kelvin is " + kelvin;
        paraEle2.style.color = "black";
        divEle.appendChild(spanEle);
        divEle.appendChild(paraEle2);
    }




}
