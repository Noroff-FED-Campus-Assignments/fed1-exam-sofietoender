const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    const url = `https://sofie-exam.flywheelsites.com/wp-json/wp/v2/posts/${id}`;

    const detailsHeader = document.getElementById("details-header");
    const detailsContent = document.getElementById("details-content");

    async function fetchBlogDetails() {
      try {
        const response = await fetch(url);
        const blogDetails = await response.json();
        document.title = blogDetails.title.rendered + "| TravelAdventures";

        showBlogDetails(blogDetails);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchFeaturedMedia(featuredMediaId) {
      try {
        const mediaUrl = `https://sofie-exam.flywheelsites.com/wp-json/wp/v2/media/${featuredMediaId}`;
        const response = await fetch(mediaUrl);
        const mediaDetails = await response.json();
        const imageSrc = mediaDetails.source_url;
        return imageSrc;
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    async function showBlogDetails(blogDetails) {
      const title = blogDetails.title.rendered;
      const content = blogDetails.content.rendered;

      detailsHeader.innerHTML = `<h1>${title}</h1>`;
      detailsContent.innerHTML = `${content}`;

      const images = document.getElementsByClassName("wp-block-image");
      for (let i = 0; i < images.length; i++) {
        const featuredMediaId = blogDetails.featured_media;
        const imageSrc = await fetchFeaturedMedia(featuredMediaId);
        if (imageSrc) {
          images[i].addEventListener("click", () => {
            createModal(imageSrc);
          });
        }
      }
    }

    function createModal(imageSrc) {
      const modal = document.createElement("div");
      modal.classList.add("modal");

      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");

      const modalImage = document.createElement("img");
      modalImage.src = imageSrc;

      const closeButton = document.createElement("span");
      closeButton.innerHTML = "&times;";
      closeButton.classList.add("close-button");
      closeButton.addEventListener("click", () => {
        document.body.removeChild(modal);
      });

      modalContent.appendChild(modalImage);
      modalContent.appendChild(closeButton);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);
    }

    fetchBlogDetails();