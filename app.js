document.getElementById("submitInfo").onclick = function () { //select HTML element with id "submitInfo" and execute following function when element is clicked
    alert('test test');
    const race=document.getElementById('race').value; // get value of HTML element with id of "race"
    localStorage.setItem("race",race); //locally store value of race input
    const name=document.getElementById('name').value;
    localStorage.setItem("name",name); //locally store value of name input
    const parentMain = document.getElementById("main"); //selects parent node
    const childStartInfo = document.getElementById("startInfo"); // select start-screen (child node) div
    const throwawayNode = parentMain.removeChild(childStartInfo); //removes start-screen by removing div element
};
// no need to get rid of values as when browser is opened start-screen prompts user for new name a race ==> overwriting previous values






//xp bar, nested grid, width gradually fill
//display varible on html with innerHTML
//code damage based on attributes... less attributes?

// Select the image element using its ID
/////////////////////////////////////const image = document.getElementById('my-image');

// Update the image source
/////////////////////////image.src = 'new-image.jpg';

