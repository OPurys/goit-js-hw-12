import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import searchImage from './js/pixabay-api.js';
import renderCards from './js/render-functions.js';

const formEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load');

formEl.addEventListener('submit', handleSearch);
loadMoreBtn.addEventListener('click', handleClick);

let page = 1;
let inputValue = null;

async function handleSearch(event) {
  event.preventDefault();
  galleryEl.innerHTML = '';
  page = 1;
  showLoader();
  hideBtn();

  const form = event.currentTarget;
  inputValue = form.elements.query.value.trim();

  if (inputValue === '') {
    hideLoader();
    iziToast.info({
      message: 'Please enter your request',
    });
    return;
  }

  showLoader();

  try {
    const response = await searchImage(inputValue, page);

    if (!response.hits.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideBtn();
    }

    galleryEl.innerHTML = renderCards(response);
    scrollPage();
    gallery.refresh();

    response.totalHits > 15 ? showBtn() : hideBtn();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    form.reset();
  }
}

async function handleClick() {
  page += 1;

  showLoader();
  hideBtn();

  try {
    const response = await searchImage(inputValue, page);
    galleryEl.insertAdjacentHTML('beforeend', renderCards(response));
    scrollPage();
    gallery.refresh();

    const lastPage = Math.ceil(response.totalHits / 15);

    if (lastPage === page) {
      hideBtn();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results",
      });
      return;
    }

    showBtn();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

function showBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}

function hideBtn() {
  loadMoreBtn.classList.add('is-hidden');
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

function scrollPage() {
  const card = document.querySelector('.gallery-item');

  window.scrollBy({
    top: card.getBoundingClientRect().height * 2,
    behavior: 'smooth',
  });
}

let gallery = new SimpleLightbox('.gallery .gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

iziToast.settings({
  message: 'Please enter your request',
  class: `izi-toast`,
  position: 'topRight',
  backgroundColor: '#ef4040',
  messageColor: 'white',
  messageSize: '16',
  theme: 'dark',
});
