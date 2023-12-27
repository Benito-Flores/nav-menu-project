// code to add a mobile pop up nav menu

const navOpen = document.querySelector('.nav-open');
const navClose = document.querySelector('.nav-close');
const nav = document.querySelector('.nav-container');

navOpen.addEventListener('click', ()=> {
  nav.classList.add('open-navigation');
});

navClose.addEventListener('click', ()=> {
  nav.classList.remove('open-navigation');
});

// code to add hover effects with current and none current links

const notCurrentPages = document.querySelectorAll('.nav-link');
const currentPage = document.querySelector('.current-page');

notCurrentPages.forEach(link => {
  link.addEventListener('mouseover', ()=> {
    currentPage.classList.remove('current-page');
  });

  link.addEventListener('mouseout', ()=> {
    currentPage.classList.add('current-page');
  });

  link.addEventListener('focus', ()=> {
    currentPage.classList.remove('current-page');
  });

  link.addEventListener('blur', ()=> {
    currentPage.classList.add('current-page');
  });

});