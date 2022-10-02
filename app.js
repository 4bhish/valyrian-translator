btnTranslate = document.querySelector("#translate");
inputTxt = document.querySelector("#input-text");
outputTxt = document.querySelector("#output-text");


btnTranslate.addEventListener("click", function clickHandler()
{
    console.log(outputTxt.innerText = inputTxt.value);
})