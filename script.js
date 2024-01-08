document.getElementById("actionButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// JavaScript to dynamically set the current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

function toggleParagraph() {
    var paragraph = document.getElementById("description");

    // Get the computed style
    var style = window.getComputedStyle(paragraph);

    // Check the current display property
    if (style.display === 'none' || style.display === '') {
        // If hidden, make it visible
        paragraph.style.display = 'block';
    } else {
        // If visible, make it hidden
        paragraph.style.display = 'none';
    }
}