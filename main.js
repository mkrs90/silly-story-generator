
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const storyText = "It was a cool 19 fahrenheit outside, so :insertx: \
decided to stay inside and eat Oreos and play ping pong. When they went to \
open the Oreos package they :inserty:, they stared in horror \
for a few moments, then :insertz:. Nick saw the whole thing, but was \
not surprised — :insertx: likes the double stuff Oreos better anyways.";

const insertX = [
    "Andrew", 
    "Keith", 
    "Josh"
];

const insertY = [
    "found it empty", 
    "found only one left", 
    "found the filling replaced with peanutbutter"
];

const insertZ = [
    "decided maybe they would go for that walk", 
    "decided to just play ping pong", 
    "turned around and went back to their office"
];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Nick', name);
    }

    if(document.getElementById("uk").checked) {
        const britishCookie = "Hydrox cookies"
        const temperature = Math.round((19 - 32) * 5/9) + " centigrade";
        newStory = newStory.replaceAll('Oreos', britishCookie);
        newStory = newStory.replaceAll('19 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}