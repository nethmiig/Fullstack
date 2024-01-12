/* let paragraph = document.querySelector("#description");
let btn = document.querySelector("#actionButton");
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

btn.addEventListener("click", function(){

    paragraph.style.height = getComputedStyle(paragraph).height;
    paragraph.innerHTML = '';
    btn.innerHTML = "You Clicked!";
}); */


let paragraph = document.querySelector("#description");
let btn = document.querySelector("#actionButton");
let originalText = paragraph.innerHTML;
let isTextHidden = false;

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

btn.addEventListener("click", function(){
    if (!isTextHidden) {
        // Hide the text
        let originalHeight = getComputedStyle(paragraph).height;
        paragraph.style.height = originalHeight;
        paragraph.innerHTML = '';
        btn.innerHTML = "Clicked!";
    } else {
        // Restore the text
        paragraph.style.height = ''; // Reset the height
        paragraph.innerHTML = originalText; // Restore the original text
        btn.innerHTML = "Click Here"; // Reset button text
    }

    // Toggle the flag
    isTextHidden = !isTextHidden;
});



/* 

document.getElementById("currentYear").innerHTML = new Date().getFullYear();
// JavaScript to dynamically set the current year

function toggleParagraph() {
    
    var paragraph = document.getElementById("description");

    // Get the computed style
    var style = window.getComputedStyle(paragraph);

    // Check the current display property
    if (style.display === 'none' || style.display === '') {
        // If hidden, make it visibled
        paragraph.style.display = 'block';
        actionButton.innerHTML = 'Click Here!';
        
        
    } else {
        // If visible, make it hidden
        paragraph.style.display = 'none';
        actionButton.innerHTML = 'You Clicked!';
        actionButton.style.marginBottom = '0';

    }
   
}

 */
