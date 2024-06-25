let BulbEl = document.getElementById("Bulb");

let catEl = document.getElementById("cat");

let btnOnEl = document.getElementById("btnOn");

let btnOffEl = document.getElementById("btnOff");

let switchEl = document.getElementById("switch");



function onHideCat(){
    BulbEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    
    catEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

    btnOffEl.style.backgroundColor = "white";

    btnOnEl.style.backgroundColor = "green";

    switchEl.textContent = "Switched Off";

}

function onVisibleCat(){
    BulbEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";

    catEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";

    btnOffEl.style.backgroundColor = "red";

    btnOnEl.style.backgroundColor = "white";

    switchEl.textContent = "Switched On";
}