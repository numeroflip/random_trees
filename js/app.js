const html = document.querySelector('html');


const lightBtn = document.querySelector('#light-button');
const darkBtn = document.querySelector('#dark-button');
const themeBtns = document.querySelector('.theming-btns');
const addBtn = document.querySelector('.sections__add-btn');
const navList = document.querySelector('.nav__list');

let remainingArticles = [...postsData]
while (remainingArticles.length < postsData.length) {
remainingArticles.push(remainingArticles.length)
};
/* ------------------------------FUNCTIONS--------------------------- */
/* Nav items */
function insertNav(element, num) {
    const navHtml = ` 
        <li class="nav__list-item">
            <a href="#article-${num}">${element.title}</a>
        </li>
    `
    navList.insertAdjacentHTML('beforeend', navHtml);

}
/* Add a post to the main page from the predefined data array: postsData*/
function addPost (num) {
    const isClosed = true;
    const data = remainingArticles[num];
    const postHtml = `
        <article data-post-id=${num} id="article-${num}" data-is-closed=${isClosed} class="article">
            <figure class="article__figure">
                <img class="article__img" src=${data.imgUrl} alt=${data.title}>
            </figure>
            <div class="article__text-wrapper">
                <h2 class="article__title">${data.title}</h2>
                <p class="article__sci-name">${data.sciName}</p>
                <p class="article__content" data-open-state="closed">${data.content.slice(0, 200) + "..."}</p>
                <button class="btn article__more-btn article__more--open">Read More</button>
            </div>
        </article>
        `
    document.querySelector('.sections').insertAdjacentHTML('beforeend', postHtml);
    /* remove the inserted elements, from the array. -> no duplicates */
    remainingArticles.splice(num, 1);
    insertNav(data, num);
};
/* Add a random post to the main page */
function addRanPost() {
    const ranNum = (Math.floor(Math.random() * remainingArticles.length));
    addPost(ranNum);
};

/* Add 4 random posts to the main page */
function init() {
    for (let i = 0; i < 4; i++) {
        addRanPost()
    };
};

document.querySelector('.sections').addEventListener('click', (e) => {
    if(e.target.classList.contains('article__more-btn')) {
        const button = e.target;
        const article = button.closest('.article');
        const content = button.previousElementSibling;
        const dataId = article.dataset.postId

        if(article.dataset.isClosed == "true") {
            button.textContent = "Close";
            content.textContent = postsData[dataId].content;
            article.dataset.isClosed = "false"
        } else {
            button.textContent = "Read More";
            content.textContent = postsData[dataId].content.slice(0, 200) + '...';
            article.dataset.isClosed = "true"
        }
    }; 
})



/* --------------------------EVENT LISTENERS------------------------ */
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


