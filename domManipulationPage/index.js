const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)
const content = document.createElement('div');
content.classList.add('content');
content.textContent="This is the glorious text-content!";
container.appendChild(content);
const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");
function alertFunction(){
    alert("Hello World!");
}
btn.addEventListener('click', e => {
    // console.log(e);
    e.target.style.backgroundColor='blue';
    e.target.style.color='white';
    // console.log(e.target);
});
btn.addEventListener('mouseover', e => {
    console.log(e);
    e.target.style.backgroundColor='yellow';
    e.target.style.color='red';
    console.log(e.target);
});
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(e.target.id);
        console.log(btn.id);
    });
});
// btn.addEventListener('click', alertFunction);
// const h1 = document.querySelector('h1');




console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display

const div = document.createElement('div');
div.setAttribute('style','color:blue; background:white;');
div.style.cssText = 'color:blue;background:white;';
div.style.color = 'blue';
div.setAttribute('id','theDiv');
div.getAttribute('id');
div.removeAttribute('id');
div.style.backgroundColor;
div.classList.add('new');
// adds class "new"
div.classList.remove('new');
// removes class "new"
div.classList.toggle('active');
// if div doesn't have class then add it
// if does, then remove it
div.textContent = 'Hello World!';
div.innerHTML = '<span>Hello World!</span>';
