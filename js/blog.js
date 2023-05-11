let currentPage = 1;
const postsPerPage = 5;
let posts = [];

async function getPosts() {
  try {
    const response = await fetch('https://sofie-exam.flywheelsites.com/?rest_route=/wp/v2/posts');
    posts = await response.json();
    // sort the posts based on date
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    displayPosts();
  } catch (error) {
    console.error(error);
  }
}

async function getMedia(mediaId) {
  try {
    const response = await fetch(`https://sofie-exam.flywheelsites.com/?rest_route=/wp/v2/media/${mediaId}`);
    const media = await response.json();
    return media;
  } catch (error) {
    console.error(error);
  }
}

function displayPosts() {
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const currentPosts = posts.slice(startIndex, endIndex);
  const postsContainer = document.getElementById('posts-container');

  currentPosts.forEach(async post => {
    const postDiv = document.createElement('div');
    
    const postLink = `blog-details.html?id=${post.id}`;
    const media = await getMedia(post.featured_media);
    const imageUrl = media?.source_url || '';
    
    postDiv.innerHTML += `<a href="${postLink}">
      <div class="blog-post-card">
        <div class="image-container">
          <img src="${imageUrl}" alt="${post.title.rendered}">
        </div>
        <div class="content-container">
          <p class="meta">${new Date(post.date).toLocaleDateString()}</p>
          <h2 class="title">${post.title.rendered}</h2>
          <p class="excerpt">${post.excerpt.rendered}</p>
          <div class="button-div">
            <button class="header-btn eggplant">Read more</button>
          </div>
        </div>
      </div>
    </a>`;
    
    postsContainer.appendChild(postDiv);
  });

  if (endIndex < posts.length) {
    const loadMoreButton = document.getElementById('load-more-btn');
    loadMoreButton.style.display = 'block';
    loadMoreButton.addEventListener('click', () => {
      currentPage++;
      displayPosts();
    });
  } else {
    const loadMoreButton = document.getElementById('load-more-btn');
    loadMoreButton.style.display = 'none';
  }
}

getPosts();
