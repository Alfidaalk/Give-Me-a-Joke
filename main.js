const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
const BG = document.querySelector('section');

document.addEventListener('DOMContentLoaded', getJoke);
button.addEventListener('click', getJoke);



function changeBG()
{
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    BG.style.backgroundColor = color;
}

async function getJoke()
{
    const jokeData = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
    changeBG();
}
