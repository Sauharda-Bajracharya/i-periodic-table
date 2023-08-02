const alkaliBlur = document.getElementById('buttonalkali');
const alkalineBlur = document.getElementById('buttonalkaline');
const lanBlur = document.getElementById('buttonlan');
const actBlur = document.getElementById('buttonact');
const transBlur = document.getElementById('buttontrans');
const posttransBlur = document.getElementById('buttonposttrans');
const metalloidsBlur = document.getElementById('buttonmetalloids');
const reactBlur = document.getElementById('buttonreact');
const nobleBlur = document.getElementById('buttonnoble');
const unknownBlur = document.getElementById('buttonunknown');

const alkali = document.querySelectorAll('.alkali');
const alkaline = document.querySelectorAll('.alkaline');
const metalloid = document.querySelectorAll('.metalloid');
const rnonmetal = document.querySelectorAll('.reactive-nonmetal');
const noble = document.querySelectorAll('.noble-gas');
const transition = document.querySelectorAll('.transition');
const posttransition = document.querySelectorAll('.post-transition');
const lanthanide = document.querySelectorAll('.lanthanide');
const actinide = document.querySelectorAll('.actinide');
const unknown = document.querySelectorAll('.unknown');

alkaliBlur.addEventListener('click', () => {
  toggleBlur(alkali);
  toggleBlur(alkaline, true);
  toggleBlur(metalloid, true);
  toggleBlur(rnonmetal, true);
  toggleBlur(noble, true);
  toggleBlur(transition, true);
  toggleBlur(posttransition, true);
  toggleBlur(lanthanide, true);
  toggleBlur(actinide, true);
  toggleBlur(unknown, true);
});

alkalineBlur.addEventListener('click', () => {
  toggleBlur(alkali, true);
  toggleBlur(alkaline);
  toggleBlur(metalloid, true);
  toggleBlur(rnonmetal, true);
  toggleBlur(noble, true);
  toggleBlur(transition, true);
  toggleBlur(posttransition, true);
  toggleBlur(lanthanide, true);
  toggleBlur(actinide, true);
  toggleBlur(unknown, true);
});

lanBlur.addEventListener('click', () => {
  toggleBlur(alkali, true);
  toggleBlur(alkaline, true);
  toggleBlur(metalloid, true);
  toggleBlur(rnonmetal, true);
  toggleBlur(noble, true);
  toggleBlur(transition, true);
  toggleBlur(posttransition, true);
  toggleBlur(lanthanide);
  toggleBlur(actinide, true);
  toggleBlur(unknown, true);
});

actBlur.addEventListener('click', () => {
  toggleBlur(alkali, true);
  toggleBlur(alkaline, true);
  toggleBlur(metalloid, true);
  toggleBlur(rnonmetal, true);
  toggleBlur(noble, true);
  toggleBlur(transition, true);
  toggleBlur(posttransition, true);
  toggleBlur(lanthanide, true);
  toggleBlur(actinide);
  toggleBlur(unknown, true);
});

transBlur.addEventListener('click', () => {
  toggleBlur(alkali, true);
  toggleBlur(alkaline, true);
  toggleBlur(metalloid, true);
  toggleBlur(rnonmetal, true);
  toggleBlur(noble, true);
  toggleBlur(transition);
  toggleBlur(posttransition, true);
  toggleBlur(lanthanide, true);
  toggleBlur(actinide, true);
  toggleBlur(unknown, true);
});

posttransBlur.addEventListener('click', () => {
  toggleBlur(alkali, true);
  toggleBlur(alkaline, true);
  toggleBlur(metalloid, true);
  toggleBlur(rnonmetal, true);
  toggleBlur(noble, true);
  toggleBlur(transition, true);
  toggleBlur(posttransition);
  toggleBlur(lanthanide, true);
  toggleBlur(actinide, true);
  toggleBlur(unknown, true);
});

metalloidsBlur.addEventListener('click', () => {
  toggleBlur(alkali, true);
  toggleBlur(alkaline, true);
  toggleBlur(metalloid);
  toggleBlur(rnonmetal, true);
  toggleBlur(noble, true);
  toggleBlur(transition, true);
  toggleBlur(posttransition, true);
  toggleBlur(lanthanide, true);
  toggleBlur(actinide, true);
  toggleBlur(unknown, true);
});

reactBlur.addEventListener('click', () => {
  toggleBlur(alkali, true);
  toggleBlur(alkaline, true);
  toggleBlur(metalloid, true);
  toggleBlur(rnonmetal);
  toggleBlur(noble, true);
  toggleBlur(transition, true);
  toggleBlur(posttransition, true);
  toggleBlur(lanthanide, true);
  toggleBlur(actinide, true);
  toggleBlur(unknown, true);
});

nobleBlur.addEventListener('click', () => {
  toggleBlur(alkali, true);
  toggleBlur(alkaline, true);
  toggleBlur(metalloid, true);
  toggleBlur(rnonmetal, true);
  toggleBlur(noble);
  toggleBlur(transition, true);
  toggleBlur(posttransition, true);
  toggleBlur(lanthanide, true);
  toggleBlur(actinide, true);
  toggleBlur(unknown, true);
});

unknownBlur.addEventListener('click', () => {
  toggleBlur(alkali, true);
  toggleBlur(alkaline, true);
  toggleBlur(metalloid, true);
  toggleBlur(rnonmetal, true);
  toggleBlur(noble, true);
  toggleBlur(transition, true);
  toggleBlur(posttransition, true);
  toggleBlur(lanthanide, true);
  toggleBlur(actinide, true);
  toggleBlur(unknown);
});


function toggleBlur(elements, removeBlur = false) {
  for (let element of elements) {
    if (removeBlur) {
      element.classList.add('blurred');
    } else {
      element.classList.remove('blurred');
    }
  }
}

window.addEventListener('click', (event) => {
    const targetElement = event.target;

    if (
        targetElement !== alkaliBlur &&
        targetElement !== alkalineBlur &&
        targetElement !== lanBlur &&
        targetElement !== actBlur &&
        targetElement !== transBlur &&
        targetElement !== posttransBlur &&
        targetElement !== metalloidsBlur &&
        targetElement !== reactBlur &&
        targetElement !== nobleBlur &&
        targetElement !== unknownBlur &&
        !targetElement.classList.contains('alkali') &&
        !targetElement.classList.contains('alkaline') &&
        !targetElement.classList.contains('metalloid') &&
        !targetElement.classList.contains('reactive-nonmetal') &&
        !targetElement.classList.contains('noble-gas') &&
        !targetElement.classList.contains('transition') &&
        !targetElement.classList.contains('post-transition') &&
        !targetElement.classList.contains('lanthanide') &&
        !targetElement.classList.contains('actinide') &&
        !targetElement.classList.contains('unknown')
    ) {
        alkali.forEach((alkali) => alkali.classList.remove('blurred'));
        alkaline.forEach((alkaline) => alkaline.classList.remove('blurred'));
        metalloid.forEach((metalloid) => metalloid.classList.remove('blurred'));
        rnonmetal.forEach((rnonmetal) => rnonmetal.classList.remove('blurred'));
        noble.forEach((noble) => noble.classList.remove('blurred'));
        transition.forEach((transition) => transition.classList.remove('blurred'));
        posttransition.forEach((posttransition) => posttransition.classList.remove('blurred'));
        lanthanide.forEach((lanthanide) => lanthanide.classList.remove('blurred'));
        actinide.forEach((actinide) => actinide.classList.remove('blurred'));
        unknown.forEach((unknown) => unknown.classList.remove('blurred'));
    }
});
