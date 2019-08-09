// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function cardFunction(){

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    const artData = response.data.articles;
    const artValue = 
    Object.values(artData);

    artValue.forEach(item =>{
        item.forEach(items => { articleCard(items);

        })

})

})

}

const view = document.querySelector('.cards-container');

function articleCard(object){

    console.log(object);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const headlineDiv = document.createElement('div');
    authorDiv.classList.add('author');

    const imgDiv = document.createElement('div');

    imgDiv.classList.add('img-container');

    const imgTag = document.createElement('span');
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
