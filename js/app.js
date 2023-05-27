
fetch('https://sofie-exam.flywheelsites.com/wp-json/wp/v2/posts/')
  .then(response => response.json())
  .then(data => {
   
    const carouselWrapper = document.getElementById('carousel-wrapper');
    data.forEach(post => {
     
      if (post.featured_media) {
      
        fetch(`https://sofie-exam.flywheelsites.com/wp-json/wp/v2/media/${post.featured_media}`)
          .then(response => response.json())
          .then(media => {
           
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            slide.innerHTML = `<div class=carousel-images>
            <img src="${media.source_url}" alt="${post.title.rendered}" class="image-post-latest"></div>
              <h2 class="header-slider">${post.title.rendered} </h2>
              <a href="blog-details.html?id=${post.id}" class="read-more">Read More</a>
            `;
            carouselWrapper.appendChild(slide);
          })
          .catch(error => console.log(error));
      }
    });

   
    new Swiper('.swiper-container', {
      slidesPerView: 3,
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
