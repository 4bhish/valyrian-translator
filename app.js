const btnTranslate = document.querySelector("#translate");
const inputTxt = document.querySelector("#input-text");
const outputTxt = document.querySelector("#output-text");

var url="https://api.funtranslations.com/translate/valyrian.json";



function constructUrl(text)
{
    return url + "?" + "text=" + inputTxt.value;
}



btnTranslate.addEventListener("click", function clickHandler()
{
    var txtInput = inputTxt.value;

    fetch(constructUrl(txtInput))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated
        outputTxt.innerText = translatedTxt}
        )
    
    
})