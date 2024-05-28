// content.js

// URL of the image you want to use as the replacement
const newProfilePicUrl = 'https://res.cloudinary.com/dxx7ni6cl/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1697467010/istockphoto-682485942-612x612_g0sbhi.jpg';

function replaceProfilePictures() {
    const profilePicSelectors = [
      'img.feed-shared-actor__avatar-image',
      'img.presence-entity__image',
      'img.profile-photo-edit__preview',
      'img.entity-result__image-entity',   // Additional selector for search results and other sections
      'img.ivm-view-attr__img--centered',  // Selector for some profile images in feed
      'img.update-components-actor__avatar' // Selector for images in update posts
    ];
  
    profilePicSelectors.forEach(selector => {
      const profilePics = document.querySelectorAll(selector);
      profilePics.forEach(pic => {
        pic.src = newProfilePicUrl;
        pic.srcset = newProfilePicUrl; // Ensures all resolution versions are replaced
      });
    });
  }
  
  // Run the function to replace profile pictures
  replaceProfilePictures();
  
  // Set up a MutationObserver to handle dynamically loaded content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      replaceProfilePictures();
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
