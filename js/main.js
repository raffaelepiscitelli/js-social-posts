const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "25-06-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "03-09-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "15-05-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=1"
        },
        "likes": 56,
        "created": "03-04-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "05-03-2021"
    }
];

//Creo una variabile che cerca uno specifico elemento nel documento html.
const mainElement = document.getElementById("container");

// Creo un ciclo for per visualizzare singolarmente gli oggetti contenuti nell'array.
for (let i = 0; i < posts.length; i++){
    const InstagramPost = posts[i];
    console.log(InstagramPost);
    //Creo una costante per creare degli elementi all'inerno del file html.
    const createEl = document.createElement("div");
    //Assegno una classe agli alementi precedentemente creati:
    createEl.classList.add("post")
    //Collego l'elemento padre agli elementi precedenmente creati.
    mainElement.appendChild(createEl);
    //Popolo gli elementi con gli oggetti dell'array.
    createEl.innerHTML= 
    `<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${InstagramPost.author.image}" alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${InstagramPost.author.name}</div>
            <div class="post-meta__time">${InstagramPost.created}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${InstagramPost.content}</div>
<div class="post__image">
    <img src="${InstagramPost.media}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${InstagramPost.likes}</b> persone
        </div>
    </div> 
</div>`
};






