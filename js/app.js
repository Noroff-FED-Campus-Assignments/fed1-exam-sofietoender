// Fetch data from the WordPress API
fetch('https://sofie-exam.flywheelsites.com/wp-json/wp/v2/posts/')
  .then(response => response.json())
  .then(data => {
    // Create a slide for each post
    const carouselWrapper = document.getElementById('carousel-wrapper');
    data.forEach(post => {
      // Check if the post has a featured image
      if (post.featured_media) {
        // Fetch the featured image
        fetch(`https://sofie-exam.flywheelsites.com/wp-json/wp/v2/media/${post.featured_media}`)
          .then(response => response.json())
          .then(media => {
            // Create slide with post title, image, and read more button
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            slide.innerHTML = `
            <img src="${media.source_url}" alt="${post.title.rendered}" class="image-post-latest">
              <h2 class="header-slider">${post.title.rendered} </h2>
              <a href="blog-details.html?id=${post.id}" class="read-more">Read More</a>
            `;
            carouselWrapper.appendChild(slide);
          })
          .catch(error => console.log(error));
      }
    });

    // Initialize the Swiper carousel
    new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })
  .catch(error => console.log(error));
