// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardFunction(){

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>{
        const articlesData = response.data.articles;
        const articlesValue = 
        Object.values(articlesData);
        

        articlesValue.forEach(item => {
            item.forEach(items => { articleCard(items);

            
    
            
    
    })
    
    })
    
    })
}


    
    const view = document.querySelector('.cards-container');
    
    function articleCard(object, index){
    
        console.log(object);
    
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
    
        const headlineDiv = document.createElement('div');
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = object.headline;

        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
    
        const imgDiv = document.createElement('div');
    
        imgDiv.classList.add('img-container');
    
        const imgTag = document.createElement('img');
        imgTag.src = object.authorPhoto;
    
    const spanTag = document.createElement('span');
    spanTag.textContent = object.authorName;
    
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(spanTag);
    imgDiv.appendChild(imgTag);
    
    view.appendChild(cardDiv);
    }

    cardFunction();

   
