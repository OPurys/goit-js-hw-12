function renderCards({ hits }) {
  return hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
	    <a class="gallery-link" href="${largeImageURL}">
		<img 
		class="gallery-image" 
		src="${webformatURL}" 
		alt="${tags}"
		/>
	    </a>
        <ul class="gallery-inner-list">
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Likes</p>
        <p class="gallery-inner-value">${likes}</p>
        </li>
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Views</p>
        <p class="gallery-inner-value">${views}</p>
        </li>
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Comments</p>
        <p class="gallery-inner-value">${comments}</p>
        </li>
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Downloads</p>
        <p class="gallery-inner-value">${downloads}</p>
        </li>
        </ul>
   </li>`;
      }
    )
    .join('');
}

export default renderCards;
