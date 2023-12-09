document.getElementById("submitInfo").onclick = function () { //select HTML element with id "submitInfo" and execute following function when element is clicked
    const race=document.getElementById('race').value; // get value of HTML element with id of "race"
    localStorage.setItem("race",race); //locally store value of race input
    const name=document.getElementById('name').value;
    localStorage.setItem("name",name); //locally store value of name input
    const dialog = document.querySelector("dialog");//text primer
    dialog.showModal();
    const closeButton = document.getElementById("battle");
    closeButton.addEventListener("click", () => {dialog.close();});
    const parentMain = document.getElementById("main"); //selects parent node
    const childStartInfo = document.getElementById("startInfo"); // select start-screen (child node) div
    const throwawayNode = parentMain.removeChild(childStartInfo); //removes start-screen by removing div element
    const loadRace = localStorage.getItem("race");
    function writeRace() {
            document.getElementById("racePlate").innerHTML+= "Race: "+loadRace; //loads race in stats section
        };
    writeRace()
    const loadName = localStorage.getItem("name");
    function writeName() {
            document.getElementById("namePlate").innerHTML+= "Name: "+loadName; //loads char name in stats section
        };
    writeName()
    if (loadRace=="Axolotl"){
        document.getElementById("portrait").innerHTML+="<img id=portraitSpecs src='./portraits/IamSoGoodAtPainting.png'>";
    }
    if (loadRace=="Human"){
        document.getElementById("portrait").innerHTML+="<img id=portraitSpecs src='./portraits/Human.png'>";
    }
    if (loadRace=="Dwarf"){
        document.getElementById("portrait").innerHTML+="<img id=portraitSpecs src='./portraits/Dwarf.png'>";
    }
    if (loadRace=="Elf"){
        document.getElementById("portrait").innerHTML+="<img id=portraitSpecs src='./portraits/Elf.png'>";
    }
    if (loadRace=="Gnome"){
        document.getElementById("portrait").innerHTML+="<img id=portraitSpecs src='./portraits/Gnome.png'>";
    }
    if (loadRace=="Halfling"){
        document.getElementById("portrait").innerHTML+="<img id=portraitSpecs src='./portraits/Halfling.png'>";
    }
    if (loadRace=="Half-Orc"){
        document.getElementById("portrait").innerHTML+="<img id=portraitSpecs src='./portraits/Half-orc.png'>";
    }
    if (loadRace=="Half-Elf"){
        document.getElementById("portrait").innerHTML+="<img id=portraitSpecs src='./portraits/Half-elf.png'>";
    }
};
// no need to get rid of race/name values as when browser is opened start-screen prompts user for new name a race ==> overwriting previous values
function reset(){localStorage.removeItem("XP");} // Dev Tool only
const countXP=document.getElementById("countXP");
let XP = 0; 
const dragon= document.getElementById('buttDrag');
function addXP(){
    XP = XP + 1;
    console.log("+1XP", XP);
    countXP.textContent=XP;
    localStorage.setItem("XP",JSON.stringify(XP)); //store XP as string
}
dragon.addEventListener('click',addXP);
function getXP(){
    const localXP = JSON.parse(localStorage.getItem("XP")); //retrieve XP as integer
    XP=localXP;
    countXP.textContent=XP;
}
getXP();
const swordSound=document.getElementById('swordSound')
function playSwordSound(){
    if (swordSound.currentTime!=0){
        swordSound.currentTime=0
    };
    swordSound.play();
}
//setInterval(function () {
  //  XP = XP + 1;
    //console.log("+1XP", XP);}, 1000);



////////////////ideas/////////////////////////////////////
//xp bar, nested grid, width gradually fill reflect % to next lvl

//enemy health bar, multiple enemies/tiers of enemy

// damage based on attributes, store attributes in array

// popup multi choice events at certain lvls, dialog boxes, ifelse statements

//animate upgrade button text to flash whenever player has sufficient xp to purchase particular upgrade















































































































//made u look






























