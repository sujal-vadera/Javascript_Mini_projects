
const images = [
  "images/igor-sporynin-SrlElZ4nYko-unsplash.jpg",
  "images/aznan-nasmi-u9vmL9IOk0g-unsplash.jpg",
  "images/jordan-ryskamp-mlb95mfBXe0-unsplash.jpg",
  "images/julien-doclot-sfV_Tw658Y4-unsplash.jpg",
  "images/krisztian-korhetz-F3OlESK5EAM-unsplash.jpg",
  "images/london-206119.jpg",
  "images/lucerne-4412244.jpg",
  "images/neuschwanstein-2602208.jpg",
  "images/opera-house-2981044.jpg",
  "images/yang-brigitte-AOXOXNNTp5Q-unsplash.jpg"
];

let currentIndex = 0;

function setupImageSlider() {
  const sliderContainer = document.getElementById("slider-container");

  // Main image element
  const mainImageElement = document.createElement("img");
  mainImageElement.className = "w-full aspect-video object-cover rounded border-4 border-green-500";
  sliderContainer.appendChild(mainImageElement);

  // Wrapper for arrows + thumbnail scroll area
  const thumbnailSectionWrapper = document.createElement("div");
  thumbnailSectionWrapper.className = "relative mt-4 flex items-center  px-10 ";
  sliderContainer.appendChild(thumbnailSectionWrapper);

  // Actual scrollable thumbnail img list
  const thumbnailScrollArea = document.createElement("div");
  thumbnailScrollArea.className = "flex overflow-x-auto gap-5 mx-1  scrollbar-hide ";
  thumbnailSectionWrapper.appendChild(thumbnailScrollArea);

  // Left arrow
  const leftArrowButton = document.createElement("div");
  leftArrowButton.innerHTML = "&#10094;";
  leftArrowButton.className = "absolute left-2 text-2xl bg-white/20 hover:bg-white/30 p-2 rounded-full cursor-pointer z-20 ";
  thumbnailSectionWrapper.appendChild(leftArrowButton);

  // Right arrow
  const rightArrowButton = document.createElement("div");
  rightArrowButton.innerHTML = "&#10095;";
  rightArrowButton.className = "absolute right-2 text-2xl bg-white/20 hover:bg-white/30 p-2 rounded-full cursor-pointer z-20 ";
  thumbnailSectionWrapper.appendChild(rightArrowButton);



  //thumb
  const thumbnailElements = [];

  function updateMainImage(newIndex) {
    currentIndex = newIndex;
    mainImageElement.src = images[newIndex];

    thumbnailElements.forEach((img, i) => {
      img.className = `h-20 w-28 object-cover cursor-pointer rounded border-2 ${i === newIndex ? 'border-green-500 opacity-100' : 'border-transparent opacity-70 brightness-75'}`;
    });

    thumbnailElements[newIndex].scrollIntoView({ behavior: "smooth", inline: "center" });
  }
//this loop push img in thumbnail
  images.forEach((src, i) => {
    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = src;
    thumbnailImage.className = "h-20 w-28 object-cover cursor-pointer rounded border-2 z-10";
    thumbnailImage.onclick = () => updateMainImage(i);
    thumbnailElements.push(thumbnailImage);
    thumbnailScrollArea.appendChild(thumbnailImage);
  });

  leftArrowButton.onclick = () => updateMainImage((currentIndex - 1 + images.length) % images.length);
  rightArrowButton.onclick = () => updateMainImage((currentIndex + 1) % images.length);

  updateMainImage(currentIndex);
}

setupImageSlider();
