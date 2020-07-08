const html = document.querySelector('html');

/* Dark/Light theme controller */
const lightBtn = document.querySelector('#light-button');
const darkBtn = document.querySelector('#dark-button');
const themeBtns = document.querySelector('.theming-btns');

/* Add 4 random tree sections to the empty main page */
function addPost (num) {
    const postHtml = ``
    document.querySelector('.sections').insertAdjacentHTML()
}

function init {

}

themeBtns.addEventListener('click', (e) => {
    const target = e.target;
    if (target == lightBtn && html.dataset.theme == 'dark') {
        html.dataset.theme = 'light';
    } 
    else if ( target == darkBtn && html.dataset.theme == 'light' ) {
        html.dataset.theme = 'dark';
    }
})

