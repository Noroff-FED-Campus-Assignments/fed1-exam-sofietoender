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
    document.title = blogDetails.title.rendered + "| TravelAdventures" ;

    showBlogDetails(blogDetails);
  } catch (error) {
    console.log(error);
  }
}

function showBlogDetails(blogDetails) {
  const title = blogDetails.title.rendered;
  const content = blogDetails.content.rendered;

  detailsHeader.innerHTML = `<h1>${title}</h1>`;
  detailsContent.innerHTML = ` ${content}`;
}

fetchBlogDetails();

