let paragraph = document.querySelector("#description");
let btn = document.querySelector("#actionButton");
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

btn.addEventListener("click", function(){
    paragraph.style.height = getComputedStyle(paragraph).height;
    paragraph.innerHTML = '';
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
