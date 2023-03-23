'use strict';

// features tab display

const featuresDisplay = document.querySelector('.features-display');
const tabs = document.querySelectorAll('.features-tab');
const featuresDisplayItem = document.querySelectorAll('.features-display-item');

featuresDisplay.addEventListener('click', function (e) {
  const clicked = e.target.closest('.features-tab');

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove('features-tab-active'));
  featuresDisplayItem.forEach((item) =>
    item.classList.remove('features-display-item-active')
  );

  clicked.classList.add('features-tab-active');
  document
    .querySelector(`.features-display-item-${clicked.dataset.tab}`)
    .classList.add('features-display-item-active');
});

// accordion

let accordion = document.querySelector('.accordions');
let items = accordion.querySelectorAll('.accordion');
let title = accordion.querySelectorAll('.accordion-heading');

function toggleAccordion() {
  let thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      // if this item is equal to the clicked item, open it.
      thisItem.classList.toggle('active');
      return;
    }
    // otherwise, remove the open class
    item.classList.remove('active');
  });
}

title.forEach((question) =>
  question.addEventListener('click', toggleAccordion)
);

// form validation

function validation() {
  let email = document.querySelector('.emailInput').value;
  const text = document.querySelector('.errorDom');
  const noteError = document.querySelector('.noteError');
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    text.classList.remove('active');
    text.innerHTML = '';
    noteError.classList.remove('active');
  } else {
    text.classList.add('active');
    text.innerHTML = 'Please Enter Valid Email Address';
    noteError.classList.add('active');
  }

  if (email == '') {
    text.classList.add('active');
    text.innerHTML = 'The input field is empty';
    noteError.classList.add('active');
  }
}

// navbar

const toggle = document.querySelector('.toggle');
const mainBar = document.querySelector('.mainBar');
const bookMark = document.querySelector('.showcase .bookmark');

toggle.addEventListener('click', () => {
  mainBar.classList.toggle('active');
  if (mainBar.classList.contains('active')) {
    toggle.innerHTML = `<svg  width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>`;
    bookMark.style.fill = '#fff';
    toggle.style.position = 'fixed';
    bookMark.style.position = 'fixed';
  } else {
    toggle.innerHTML = `            <svg width="18" height="15">
    <path
      fill="#242A45"
      fill-rule="evenodd"
      d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
    />
  </svg>`;
    bookMark.style.fill = '#242a45';
    toggle.style.position = 'absolute';
    bookMark.style.position = 'absolute';
  }
});

$('.list-item').on('click', function () {
  $('.toggle').removeClass('active');
  $('.toggle').css('position', 'absolute');
  $('.showcase .bookmark').css('position', 'absolute');
  $('.showcase .bookmark').css('fill', '#242a45');
  $('.mainBar').removeClass('active');
});
