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
const upgrades={
    Clubs:0,
    Daggers:0,
    Axes:0,
    Spears:0,
    Shovels:0,
    Swords:0,
    Rifles:0,
    getTotalUpgrades: function(){
        return this.Clubs+this.Daggers+this.Axes+this.Spears+this.Shovels+this.Swords+this.Rifles;
    },
}
const totalUpgradesHTML=document.getElementById('totalUpgrades')
//let totalUpgrades=upgrades.getTotalUpgrades();
//function numberOfUpgrades(){                                      //couldn't get this to work so used alternative method
    //console.log(totalUpgrades); //print total number of upgrades
    //totalUpgradesHTML.textContent=totalUpgrades;
//}
let totalUpgrades=0;
let xpPerSec=0;
const xpPerSecHTML=document.getElementById("xpPerSec");
const totalClubs=document.getElementById("totalClubs");
const totalDaggers=document.getElementById("totalDaggers");
const totalAxes=document.getElementById("totalAxes");
const totalSpears=document.getElementById("totalSpears");
const totalRifles=document.getElementById("totalRifles");
document.getElementById("buyClub").onclick = function (){
    if (XP>=10){
        XP=XP-10;
        xpPerSec=xpPerSec+1;
        xpPerSecHTML.textContent=xpPerSec;
        upgrades.Clubs=upgrades.Clubs+1;
        totalClubs.textContent=upgrades.Clubs;
        //numberOfUpgrades();
        totalUpgrades=totalUpgrades+1;
        totalUpgradesHTML.textContent=totalUpgrades;
        setInterval(function () {
            XP = XP + 1;
            console.log("+1XP", XP);
            countXP.textContent=XP;
            localStorage.setItem("XP",JSON.stringify(XP));
            getXP();
                }, 
        1000);
    }
} 
document.getElementById("buyDagger").onclick = function (){
    if (XP>=50){
        XP=XP-50;
        xpPerSec=xpPerSec+10;
        xpPerSecHTML.textContent=xpPerSec;
        upgrades.Daggers=upgrades.Daggers+1;
        totalDaggers.textContent=upgrades.Daggers;
        totalUpgrades=totalUpgrades+1;
        totalUpgradesHTML.textContent=totalUpgrades;
        setInterval(function () {
            XP = XP + 10;
            console.log("+10XP", XP);
            countXP.textContent=XP;
            localStorage.setItem("XP",JSON.stringify(XP));
            getXP();
                }, 
        1000);
    }
}
document.getElementById("buyAxe").onclick = function (){

}
document.getElementById("buySpear").onclick = function (){
    if (XP>=1000){
        XP=XP-1000;
        xpPerSec=xpPerSec+250;
        xpPerSecHTML.textContent=xpPerSec;
        upgrades.Spears=upgrades.Spears+1;
        totalSpears.textContent=upgrades.Spears;
        totalUpgrades=totalUpgrades+1;
        totalUpgradesHTML.textContent=totalUpgrades;
        setInterval(function () {
            XP = XP + 250;
            console.log("+250XP", XP);
            countXP.textContent=XP;
            localStorage.setItem("XP",JSON.stringify(XP));
            getXP();
                }, 
        1000);
    }
}
document.getElementById("buyShovel").onclick = function (){

}
document.getElementById("buySword").onclick = function (){
    if (XP>=10000){
        XP=XP-10000;
        xpPerSec=xpPerSec+1000;
        xpPerSecHTML.textContent=xpPerSec;
        upgrades.Swords=upgrades.Swords+1;
        totalSwords.textContent=upgrades.Swords;
        totalUpgrades=totalUpgrades+1;
        totalUpgradesHTML.textContent=totalUpgrades;
        setInterval(function () {
            XP = XP + 1000;
            console.log("+1000XP", XP);
            countXP.textContent=XP;
            localStorage.setItem("XP",JSON.stringify(XP));
            getXP();
                }, 
        1000);
    }
}
document.getElementById("buyRifle").onclick = function (){

}   



////////////////ideas/////////////////////////////////////
//xp bar, nested grid, width gradually fill reflect % to next lvl

//enemy health bar, multiple enemies/tiers of enemy

// damage based on attributes, store attributes in array

// popup multi choice events at certain lvls, dialog boxes, ifelse statements

//animate upgrade button text to flash whenever player has sufficient xp to purchase particular upgrade















































































































//made u look






























