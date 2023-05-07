async function getPosts() {
  try {
    const response = await fetch('https://sofie-exam.flywheelsites.com/?rest_route=/wp/v2/posts');
    const posts = await response.json();
    return posts;
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

async function displayPosts() {
  const posts = await getPosts();
  const postsContainer = document.getElementById('posts-container');

  posts.forEach(async post => {
    const postDiv = document.createElement('div');
    const author = getAuthorName(post.id);
    
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
}
function getAuthorName(postId) {
  switch (postId) {
    case 1:
      return 'Alisha Singh';
    case 2:
      return 'Naveen Kumar';
    case 3:
      return 'Maya Rodriguez';
    default:
      return 'Unknown';
  }
}

displayPosts();
