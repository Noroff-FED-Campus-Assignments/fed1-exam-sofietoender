const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://sofie-exam.flywheelsites.com/?rest_route=/wp/v2/posts/${id}`;

const detailsHeader = document.getElementById("details-header");
const detailsContent = document.getElementById("details-content");

async function fetchBlogDetails() {
  try {
    const response = await fetch(url);
    const blogDetails = await response.json();

    showBlogDetails(blogDetails);
  } catch (error) {
    console.log(error);
  }
}

function showBlogDetails(blogDetails) {
  const title = blogDetails.title.rendered;
  const content = blogDetails.content.rendered;

  detailsHeader.innerHTML = `<h1>${title}</h1>`;
  detailsContent.innerHTML = `${content}`;
}

fetchBlogDetails();




/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

// TODO: Get the query parameter from the URL

// TODO: Get the id from the query parameter

// TODO: Create a new URL with the id @example: https://www.youtube.com/shorts/ps7EkRaRMzs

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an a single of objects from the API

/*
============================================
Helper functions
============================================
*/

/**
 * TODO: Create a function to create a DOM element.
 * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
