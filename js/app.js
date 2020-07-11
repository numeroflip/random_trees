




// Global variables

const html = document.querySelector('html');
const lightBtn = document.querySelector('#light-button');
const darkBtn = document.querySelector('#dark-button');
const themeBtns = document.querySelector('.theming-btns');
const addBtn = document.querySelector('.sections__add-btn');
const navList = document.querySelector('.nav__list');
const currNavElements = [];
const articles = []


// We follow which articles are shown already, and what is left in the postsData Array. This way we won't have duplicates.
let remainingArticles = [...postsData]
while (remainingArticles.length < postsData.length) {
remainingArticles.push(remainingArticles.length)
};

// ------------------------------------------------------------
// ----------------------------FUNCTIONS-----------------------
// ------------------------------------------------------------

// Helper function: inserts a navigation element into the header
function insertNav(element) {
    const navHtml = ` 
        <li class="nav__list-item">
            <a href="#article-${element.id}">${element.title}</a>
        </li>
    `
    navList.insertAdjacentHTML('beforeend', navHtml);

}
// Helper function: Adds a post to the DOM, given a "num". It selects and brings the data from the postsData array, and makes it visible.
function addPost (num) {
    const data = remainingArticles[num];
    let paragraphs = data.content;
    const truncatedPar = data.truncatedContent;

        
    paragraphs = paragraphs.join('</p>\n<p class="article__content" >');
    // Puts the whole content into the DOM,
    // We have a "truncatedPar" too, because the other paragraphs are hidden by default, the user can open, and close it later.
    const postHtml = `
        <article data-post-id=${data.id} id="article-${data.id}" data-is-closed="true" class="article">
            <figure class="article__figure">
                <img class="article__img" src=${data.imgUrl} alt=${data.title}>
            </figure>
            <div class="article__text-wrapper">
                <h2 class="article__title">${data.title}</h2>
                <p class="article__sci-name">${data.sciName}</p> 
                <p class="article__content--truncated">${truncatedPar}</p>
                <p class="article__content">${paragraphs}</p>
                <button class="btn article__more-btn article__more--open">Read More</button>
            </div>
        </article>
        `
    document.querySelector('.sections').insertAdjacentHTML('beforeend', postHtml);
    /* remove the inserted elements, from the array. -> no duplicates */
    remainingArticles.splice(num, 1);

    insertNav(data);
};

// Add a random post to the DOM, from the remaining articles.
function addRanPost() {
    const ranNum = (Math.floor(Math.random() * remainingArticles.length));
    addPost(ranNum);
};

// Main function: add 4 random articles to the page. This is how we start the homepage.
function init() {
    for (let i = 0; i < 4; i++) {
        addRanPost()
        handleFocus()
    };
};


// ----------------------------------------
// -----------HANDLE VISIBILITY------------
// ----------------------------------------

// This is from stackoverflow (https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling)
function isScrolledIntoView(el) {
    const windowHeight = window.innerHeight;
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Only completely visible elements return true:
    let isVisible = (((elemTop >= 0) && (elemBottom <= window.innerHeight)) || ((elemTop < 100) && (elemBottom >= windowHeight/2)));
    // Partially visible elements return true:
    //let isVisible = elemTop < window.innerHeight && elemBottom >= 40;
    return isVisible;
}

// handler function
function handleFocus() {

    const articles = Array.from(document.querySelectorAll('.article'));
    const currFocusArticle = document.querySelector('.sections .focus');
    const currFocusLink = document.querySelector('.header .focus')

    articles.forEach(article => {
        if (isScrolledIntoView(article)) {
            if (currFocusArticle !== article && currFocusArticle) {
                currFocusArticle.classList.remove('focus');
                currFocusLink.classList.remove('focus');
            }

            if (!article.classList.contains('focus')) {
                article.classList.add('focus');
                document.querySelector(`a[href="#${article.id}"]`).classList.add('focus');
            };
        };
    });
};

// run on scroll events 
document.addEventListener('scroll', handleFocus)


/* --------------------------EVENT LISTENERS------------------------ */
/* "Show more/close" buttons for articles */
document.querySelector('.sections').addEventListener('click', (e) => {
    if(e.target.classList.contains('article__more-btn')) {
        const button = e.target;
        const article = button.closest('.article');
        const content = document.querySelector(`#article-${article.dataset.postId} .article__content` )
        const dataId = article.dataset.postId

        if(article.dataset.isClosed == "true") {
            button.textContent = "Close";
            article.dataset.isClosed = "false"
            if (content.textContent.length > 200) {
                content.textcontent = content.textContent.split(0,200) + '...'
            }
        } else {
            button.textContent = "Read More";
            article.dataset.isClosed = "true"
        }
    }; 
})
/*----------- Dark/Light theme controller ----------------*/
themeBtns.addEventListener('click', (e) => {
    const target = e.target;
    if (target == lightBtn && html.dataset.theme == 'dark') {
        html.dataset.theme = 'light';
    } 
    else if ( target == darkBtn && html.dataset.theme == 'light' ) {
        html.dataset.theme = 'dark';
    }
});

addBtn.addEventListener('click', () => {
    addRanPost()
})

init();


