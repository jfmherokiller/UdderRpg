var udderfullness = 100;

document.getElementById("RefillUdder").onclick = RefillFunction;
document.getElementById("RelieveUdder").onclick = MilkSelf;


function UpdateUdder() {
    document.getElementById("udderFullness").innerHTML = udderfullness.toString();
}

function RefillFunction() {
    udderfullness += 10;
    UpdateUdder();
}

function MilkSelf() {
    if (udderfullness > 0) {
        udderfullness = udderfullness - 10;
    }
    UpdateUdder();
}

//Immediately update udder upon starting game
UpdateUdder();
