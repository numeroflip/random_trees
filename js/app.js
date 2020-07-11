
// Global variables

const html = document.querySelector('html');
const lightBtn = document.querySelector('#light-button');
const darkBtn = document.querySelector('#dark-button');
const themeBtns = document.querySelector('.theming-btns');
const addBtn = document.querySelector('.sections__add-btn');
const navList = document.querySelector('.nav__list');
const sections = document.querySelector('.sections');
const currNavElements = [];
const articles = []


// We follow which articles are shown already, and what is left in the postsData Array. This way we won't have duplicates.
let remainingArticles = [...postsData]
while (remainingArticles.length < postsData.length) {
remainingArticles.push(remainingArticles.length)
};

// ----------------------------------------------------------------
// -----------------------HELPER FUNCTIONS-------------------------
// ----------------------------------------------------------------

// inserts a navigation element into the header
function insertNav(element) {
    const navHtml = ` 
        <li class="nav__list-item">
            <a href="#article-${element.id}">${element.title}</a>
        </li>
    `
    navList.insertAdjacentHTML('beforeend', navHtml);
};

//  Adds a post to the DOM, given a "num". It selects and brings the data from the postsData array, and makes it visible.
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
                <button class="btn article__more-btn">Read More</button>
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
    if (remainingArticles.length) {
        addPost(ranNum);
    } else {
        alert("Sorry, there is nothing more to add")
    }
};

// This is from stackoverflow (https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling)
function isScrolledIntoView(el) {
    const windowHeight = window.innerHeight;
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    
    // Check if element is either totally in view, or in view, but outgrows it
    let isVisible = (((elemTop >= 0) && (elemBottom <= window.innerHeight)) || ((elemTop < 100) && (elemBottom >= windowHeight/2)));
    return isVisible;
}

// -------------------------------------------------
// ----------------HANDLER FUNCTIONS----------------
// -------------------------------------------------


/*-------- Dark/Light theme controller ----------*/
// Listens for button click, and changes the html's data-theme property
// In the SASS variable file, there is a selector, for that property.
function handleThemeBtns(e) {
    const target = e.target;
    if (target == lightBtn && html.dataset.theme == 'dark') {
        html.dataset.theme = 'light';
    } else if ( target == darkBtn && html.dataset.theme == 'light' ) {
        html.dataset.theme = 'dark';
    }
};
    
    


// 
// --------Handle the '.focus' class--------
// 
function handleFocus() {

    const articles = Array.from(document.querySelectorAll('.article'));
    const currFocusArticle = document.querySelector('.sections .focus');
    const currFocusLink = document.querySelector('.header .focus')

    // iterate through all the articles
    articles.forEach(article => {
        if (isScrolledIntoView(article)) {

            // remove focus, if the element has the class, but no longer in view
            if (currFocusArticle !== article && currFocusArticle) {
                currFocusArticle.classList.remove('focus');
                currFocusLink.classList.remove('focus');
            }

            // Add '.focus' if element is in view
            if (!article.classList.contains('focus')) {
                article.classList.add('focus');
                document.querySelector(`a[href="#${article.id}"]`).classList.add('focus');
            };
        };
    });
};

// 
/* -----Handle the "Read more/Close" buttons, in the end of every article------ */
// 
// Event delegation. It will be called on the ".sections" container element, see "init" function
function handleOpenBtns(e) {

    // Check if the button is being clicked
    if(e.target.classList.contains('article__more-btn')) {

        const button = e.target;
        const article = button.closest('.article');
        const content = document.querySelector(`#article-${article.dataset.postId} .article__content` )

        // Change the button text based on if the content getting closed or opened,
        // and store that state in the article-s dataset
        if(article.dataset.isClosed == "true") {
            button.textContent = "Close";
            article.dataset.isClosed = "false"
            if (content.textContent.length > 200) {
                content.textcontent = content.textContent.split(0,200) + '...'

            };
        } else {
            button.textContent = "Read More";
            article.dataset.isClosed = "true"
        };
    }; 
};

// -----------------------------------------
// ------------MAIN FUNCTION----------------
// -----------------------------------------
function init() {

    // add 4 random articles to the page. This is how we start the homepage.
    for (let i = 0; i < 4; i++) {
        addRanPost()
    };
    handleFocus()

    // Handle the focusing (adding/removing '.focus' class) of articles,
    // and navigation links, based on what is visible
    document.addEventListener('scroll', handleFocus);

    // Control the Dark/Light theme buttons
    themeBtns.addEventListener('click', handleThemeBtns);

    // Control the "read more/close" buttons, at the end of each article
    sections.addEventListener('click', handleOpenBtns);

    // Control the "Add one more section" button at the end of the '.sections' container
    addBtn.addEventListener('click', addRanPost);

};

init();


