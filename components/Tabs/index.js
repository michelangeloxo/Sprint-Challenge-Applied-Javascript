// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function axiosFunction(){

    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        const getData = response.data.topics;

        getData.forEach(item =>{
            insertTopic(item);
        })
    })
}

const topicLink = document.querySelector(".topics");

function insertTopic(newData){
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.innerText = newData;

    topicLink.appendChild(tabDiv);
}

axiosFunction();