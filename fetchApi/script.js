console.log(fetch('https://reqres.in/api/users'))

function showHide(){
    const elm = document.getElementById('finishRiddle');
    if (elm.style.display === 'none') {
        elm.style.display = 'block';
    } else {
        elm.style.display = "none";
    }
}
/*
---------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {}); 
---------------------------------------------------------
This ensure the javascript inside the callback function
will only run after the HTML document has been fully loaded.

This is useful to ensure that all elements that the JavaScript
will interact with are available.

Without this, you might run into errors because those elements
might not yet exist in the DOM.
*/

document.addEventListener('DOMContentLoaded', () => { 
    const startOfRiddle = document.getElementById('riddleStart');
    const endOfRiddle = document.getElementById('finishRiddle');
    const refreshButton = document.getElementById('refreshBtn');

    startOfRiddle.textContent = '';
    endOfRiddle.textContent = '';
    fetch ('https://riddles-api.vercel.app/random')
        .then(response => response.json())
        .then(data => {
            startOfRiddle.textContent = data.riddle
            endOfRiddle.textContent = data.answer
        })

    refreshButton.addEventListener('click', () => {
        window.location.reload();
    });
});



