// opens navigation for mobile view

const openNav = document.querySelector('.nav-open');
const closeNav = document.querySelector('.nav-close');
const nav = document.querySelector('.nav-container');

openNav.addEventListener('click', ()=> {
  nav.classList.add("open-navigation");
});

closeNav.addEventListener('click', ()=> {
  nav.classList.remove("open-navigation");
});

// removes hover and focus styling for current page

const currentPage = document.querySelector('.current-page');
const notCurrentPages = document.querySelectorAll('.nav-link');

notCurrentPages.forEach(link => {
  link.addEventListener('mouseover', ()=> {
    currentPage.classList.remove("current-page");
  });

  link.addEventListener('mouseout', ()=> {
    currentPage.classList.add("current-page");
  });

  link.addEventListener('focus', ()=> {
    currentPage.classList.remove("current-page");
  });
  
  link.addEventListener('blur', ()=> {
    currentPage.classList.add("current-page");
  });
});