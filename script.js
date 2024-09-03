document.querySelectorAll(".more-than-four").forEach((section) => {
    const moreButton = section.querySelector(".view-more");
    const moreItems = section.nextElementSibling.querySelector(".more-items");
  
    moreButton.addEventListener("click", () => {
      if (moreItems.style.display === "flex") {
        moreItems.style.display = "none";
        moreButton.textContent = "View More";
      } else {
        moreItems.style.display = "flex";
        moreButton.textContent = "View Less";
        
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  
  // Handling image click URL
  const figureTags = document.querySelectorAll("figure");
  
  figureTags.forEach(figureTag => {
    figureTag.addEventListener("click", () => {
      const figCaption = figureTag.querySelector("figcaption").textContent;
      const uri = `https://customerapp.movingsolutions.in/dashboard/enquiry.php?qType=packer&Specific=${figCaption}`;
      const encoded = encodeURI(uri);
      window.location.href = encoded;
    });
  });
  