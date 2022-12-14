function fetchFilms(){
fetch(`https://api.npoint.io/0b2aef194151f5771a43/films/`)
.then(res => res.json())
.then(data => renderFilms(data));

}
function renderFilms(data) {
const div = document.getElementById(`card`);
    const ul = document.getElementById(`films`);

    data.forEach(movie => {
        const li = document.createElement(`li`);
        li.classList.add(`pointer`, `bold-italic-text`);
        li.innerHTML = movie.title;

        const filmCard = document.createElement(`div`);
        filmCard.classList.add(`film-card`);
        filmCard.innerHTML =` 
<img src="${movie.poster}" height = 500px width = 300px/>
<h2 class="bold-text">${movie.title}</h2>
<p class="bold-text">${movie.description}</p>
<p><span class="highlight bold-text">Runtime: ${movie.runtime}</span></p>
<p><span class="highlight bold-text">Showtime: ${movie.showtime}</span></p>
`;
// create a new <p> to show number of tickets

const tickets = document.createElement("p");
tickets.classList.add("bold-italic-text")
tickets.innerHTML = `Available tickets: ${(movie.capacity) - (movie.tickets_sold)}`;
// append new <p> to filmCard
filmCard.appendChild(tickets);


const btn = document.createElement("button");
btn.textContent = "Buy ticket";
// add event listener to button to decrement tickets when clicked
btn.addEventListener(`click`,()=>{
// check whether tickets number is 0
if(parseInt(tickets.innerText.split(`: `)[1])=== 0){
//if true...show alert
alert(`tickets sold out`);}
else{
//now decrement by 1
tickets.innerText = `Available tickets: ${parseInt(tickets.innerText.split(`: `)[1])- 1}`;
}
});
// append button to filmcard
filmCard.appendChild(btn);

li.addEventListener(`click`, ()=>{
div.innerText=""
div.appendChild(filmCard);
// check whether filmcard has "active" class
if(!filmCard.classList.contains(`active`)){
//if not...add the 'active' class and append filmcard to li element
filmCard.classList.add(`active`);
div.appendChild(filmCard);
}


});
ul.appendChild(li);
    });
}
fetchFilms();
