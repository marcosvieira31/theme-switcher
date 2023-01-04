const toggle = document.getElementById('toggle');
const toggleContainer = document.getElementById('toggle-container');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const span = document.querySelector('span');


function toggleInteraction() {
    if(toggle.classList.contains('toggleDark')){
        toggle.classList.replace('toggleDark', 'toggleLight');
        toggleContainer.classList.replace('toggleContainerDark', 'toggleContainerLight');
        body.classList.replace('bodyDark', 'bodyLight');
        span.textContent = 'Light';
        h1.style.color = 'var(--dark)';
    }else{
        toggleContainer.classList.replace('toggleContainerLight', 'toggleContainerDark');
        toggleContainer.classList.remove('preload');

        toggle.classList.replace('toggleLight','toggleDark');
        toggle.classList.remove('preload');

        body.classList.replace('bodyLight','bodyDark');
        body.classList.remove('preload');

        span.textContent = 'Dark';
        h1.style.color = 'var(--light)';
    }
}

toggle.addEventListener('click', toggleInteraction);