async function getPosts() {
  try {
    const response = await fetch('https://sofie-exam.flywheelsites.com/?rest_route=/wp/v2/posts');
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
} 

async function displayPosts() {
  const posts = await getPosts();
  const postsContainer = document.getElementById('posts-container');

  posts.forEach(post => {
      const postDiv = document.createElement('div');
      const author = getAuthorName(post.id);
      const postLink = `blog-details.html?id=${post.id}`;
      postDiv.innerHTML += `<a href="${postLink}"><div class="blog-post-card"><p>By ${author} on ${new Date(post.date).toLocaleDateString()}</p><h2>${post.title.rendered}</h2><p>${post.excerpt.rendered}</p><div class="button-div"><button class="header-btn eggplant">Read more</button></div></div></a>`;
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