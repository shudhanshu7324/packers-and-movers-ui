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
    }
  });
});

// handling image click url
const figureTags = document.querySelectorAll("figure");

for (let i = 0; i < figureTags.length; i++) {
  figureTags[i].addEventListener("click", () => {
    const figureTag = figureTags[i];
    const figCaption = figureTag.querySelector(":nth-child(2)").textContent;
    const uri = `https://customerapp.movingsolutions.in/dashboard/enquiry.php?qType=packer&Specific=${figCaption}`;
    const encoded = encodeURI(uri);
    console.log(encoded);
  });
}
