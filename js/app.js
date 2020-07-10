const html = document.querySelector('html');


const lightBtn = document.querySelector('#light-button');
const darkBtn = document.querySelector('#dark-button');
const themeBtns = document.querySelector('.theming-btns');
const addBtn = document.querySelector('.sections__add-btn');
const navList = document.querySelector('.nav__list');

const contLength = 200;

let remainingArticles = [...postsData]
while (remainingArticles.length < postsData.length) {
remainingArticles.push(remainingArticles.length)
};
/* ------------------------------FUNCTIONS--------------------------- */
/* Nav items */
function insertNav(element) {
    const navHtml = ` 
        <li class="nav__list-item">
            <a href="#article-${element.id}">${element.title}</a>
        </li>
    `
    navList.insertAdjacentHTML('beforeend', navHtml);

}
/* Add a post to the main page from the predefined data array: postsData*/
function addPost (num) {
    const data = remainingArticles[num];
    let paragraphs = data.content;
    /* Trunc. 1st paragraph if longer than given length */
    let truncatedPar = "";

    if (paragraphs[0].length > 200) {
            truncatedPar = paragraphs[0].slice(0,200) + "...";
        } else {
            truncatedPar = paragraphs[0] + "..."
        }
    
        console.log("TRUNCATED: " + truncatedPar);
        console.log("NORMAL: " + paragraphs[0]);
    
    paragraphs = paragraphs.join('</p><p class="article__content" >');
    const postHtml = `
        <article data-post-id=${data.id} id="article-${data.id}" data-is-closed="true" class="article">
            <figure class="article__figure">
                <img class="article__img" src=${data.imgUrl} alt=${data.title}>
            </figure>
            <div class="article__text-wrapper">
                <h2 class="article__title">${data.title}</h2>
                <p class="article__sci-name">${data.sciName}</p>
                <p class="article__content--truncated>${truncatedPar}</p>
                <p class="article__content >${paragraphs}</p>
                <button class="btn article__more-btn article__more--open">Read More</button>
            </div>
        </article>
        `
    document.querySelector('.sections').insertAdjacentHTML('beforeend', postHtml);
    /* remove the inserted elements, from the array. -> no duplicates */
    remainingArticles.splice(num, 1);
    insertNav(data);
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




/* --------------------------EVENT LISTENERS------------------------ */
/* "Show more/close" buttons for articles */
document.querySelector('.sections').addEventListener('click', (e) => {
    if(e.target.classList.contains('article__more-btn')) {
        const button = e.target;
        const article = button.closest('.article');
        const content = document.querySelector(`#article-${article.dataset.postId} .article__content` )
        const dataId = article.dataset.postId
        console.log(content);

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


