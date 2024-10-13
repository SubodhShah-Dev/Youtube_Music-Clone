// // Done by myself at first.....

// const currentSong = new Audio();

// function sideMenuToggle() {
//   const hamBar = document.querySelector("#hamburgerIcon");
//   const sideMenu = document.querySelector("#sideMenu");
//   const crossIcon = document.querySelector(".crossIcon");

//   hamBar.addEventListener("click", () => {
//     sideMenu.classList.toggle("left-[-1000px]");
//   });

//   crossIcon.addEventListener("click", () => {
//     sideMenu.classList.add("left-[-1000px]");
//   });
// }

// function playButtonToggle() {
//   const sideMenuInfo = document.querySelectorAll(".sideMenuButtomInfo");
//   const sideMenuPlayBtn = document.querySelectorAll(".sideMenuPlayBtn");

//   sideMenuInfo.forEach((info, index) => {
//     info.addEventListener("mouseover", () => {
//       sideMenuPlayBtn[index].classList.remove("hidden");
//     });
//     info.addEventListener("mouseout", () => {
//       sideMenuPlayBtn[index].classList.add("hidden");
//     });
//   });
// }

// async function fetchSongs(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`There was a problem with the fetch operation:`, error);
//   }
// }

// async function fetchImages(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`There was a problem with the fetch operation:`, error);
//   }
// }

// function cardPlayBtn(songs) {
//   const playIcon = Array.from(document.querySelectorAll(".cardSongPlaybtn"));

//   playIcon.forEach((btn, index) => {
//     const playSvg = Array.from(btn.children)[0];
//     btn.addEventListener("click", () => {
//       if (playSvg.getAttribute("src") === "/svg/cardPlay.svg") {
//         playIcon.forEach((icon) => {
//           const pauseSvg = Array.from(icon.children);
//           pauseSvg.forEach((e) => {
//             e.setAttribute("src", "/svg/cardPlay.svg");
//           });
//         });
//         playSvg.setAttribute("src", "/svg/cardPause.svg");
//         currentSong.src = songs[index];
//         currentSong.play();
//         console.log(currentSong.src);
//       } else if (playSvg.getAttribute("src") === "/svg/cardPause.svg") {
//         playSvg.setAttribute("src", "/svg/cardPlay.svg");
//         currentSong.pause();
//       }
//     });
//   });
// }

// function cardFiller(songsNames, songsPaths, songsImages) {
//   const songsCard = Array.from(document.querySelectorAll(".songCard"));
//   songsCard.forEach((song, index) => {
//     song.addEventListener(`mouseover`, () => {
//       const iconsContainer = Array.from(
//         document.querySelectorAll(".iconsContainer"),
//       )[index];
//       const playIcon = Array.from(
//         document.querySelectorAll(".cardSongPlaybtn"),
//       )[index];
//       const playSvg = Array.from(playIcon.children)[0];
//       if (iconsContainer.classList.contains("hidden")) {
//         iconsContainer.classList.remove("hidden");
//         iconsContainer.classList.add("flex");
//       }
//       if (playIcon.classList.contains("hidden")) {
//         playIcon.classList.remove("hidden");
//       }
//     });
//     song.addEventListener(`mouseout`, () => {
//       const iconsContainer = Array.from(
//         document.querySelectorAll(".iconsContainer"),
//       )[index];
//       const playIcon = Array.from(
//         document.querySelectorAll(".cardSongPlaybtn"),
//       )[index];
//       const playSvg = Array.from(playIcon.children)[0];

//       if (!iconsContainer.classList.contains("hidden")) {
//         iconsContainer.classList.add("hidden");
//         iconsContainer.classList.remove("flex");
//       }
//       if (!playIcon.classList.contains("hidden")) {
//         playIcon.classList.add("hidden");
//       }
//     });
//     const html = `<div class="flex items-center gap-[7px]">
//                     <div>
//                       <img
//                         class="max-w-[40px]"
//                         src="${songsImages[index]}"
//                         alt="Song Image"
//                       />
//                     </div>
//                     <div>
//                       <a
//                         class="text-[10px] font-bold md:text-[13px]"
//                         href="${songsPaths[index]}"
//                         >${songsNames[index]}</a
//                       >
//                       <div class="text-[8px] font-light md:text-[13px]">
//                         <span
//                           ><a href="${songsPaths[index]}">Subodh shah</a> - 300k
//                           views</span
//                         >
//                       </div>
//                     </div>
//                   </div>
//                   <div class="iconsContainer hidden w-[25%] justify-center md:justify-around">
//                     <button
//                       type="button"
//                       title="LikeBtn"
//                       class="rounded-xl p-[7px] hover:bg-[#393a32]"
//                     >
//                       <img src="/svg/likeBtn.svg" alt="Like Button" />
//                     </button>
//                     <button
//                       type="button"
//                       title="DisLikeBtn"
//                       class="rounded-xl p-[7px] hover:bg-[#393a32]"
//                     >
//                       <img src="/svg/dislikeBtn.svg" alt="Dislike Button" />
//                     </button>

//                     <button
//                       class="hidden rounded-xl p-[3px] hover:bg-[#393a32] lg:block"
//                       type="button"
//                       title="Options"
//                     >
//                       <img src="/svg/threedots.svg" alt="Options" />
//                     </button>
//                   </div>
//                   <button
//                     type="button"
//                     title="Play Button"
//                     class="cardSongPlaybtn absolute left-[17px] hidden"
//                   >
//                     <img src="/svg/cardPlay.svg" alt="Play button" />
//                   </button>
//                   `;
//     song.innerHTML = html;
//   });
// }

// async function main() {
//   const songsUrl = `/songs.json`;
//   const imagesUrl = `/images.json`;
//   const songsList = await fetchSongs(songsUrl);
//   const imagesList = await fetchSongs(imagesUrl);
//   const songsNames = [];
//   const songsPaths = [];
//   const songsImages = [];
//   const songsArray = songsList["list"];
//   const imagesArray = imagesList["list"];

//   songsArray.forEach((item) => {
//     const songName = item["name"];
//     songsNames.push(songName);
//   });
//   songsArray.forEach((item) => {
//     const songPath = item["path"];
//     songsPaths.push(songPath);
//   });
//   imagesArray.forEach((item) => {
//     const songImg = item["path"];
//     songsImages.push(songImg);
//   });
//   sideMenuToggle();
//   playButtonToggle();
//   cardFiller(songsNames, songsPaths, songsImages);
//   cardPlayBtn(songsPaths);
// }

// main();

// Done in a better way later.....

const currentSong = new Audio();

// Function to fetch JSON data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
  }
}

// Toggle the side menu
function sideMenuToggle() {
  const hamBar = document.querySelector("#hamburgerIcon");
  const sideMenu = document.querySelector("#sideMenu");
  const crossIcon = document.querySelector(".crossIcon");

  const toggleSideMenu = () => {
    sideMenu.classList.toggle("left-[-1000px]");
  };

  hamBar.addEventListener("click", toggleSideMenu);
  crossIcon.addEventListener("click", () => {
    sideMenu.classList.add("left-[-1000px]");
  });
}

// Show or hide play button on hover
function playButtonToggle() {
  const sideMenuInfo = document.querySelectorAll(".sideMenuButtomInfo");
  const sideMenuPlayBtn = document.querySelectorAll(".sideMenuPlayBtn");

  sideMenuInfo.forEach((info, index) => {
    info.addEventListener("mouseover", () => {
      sideMenuPlayBtn[index].classList.remove("hidden");
    });
    info.addEventListener("mouseout", () => {
      sideMenuPlayBtn[index].classList.add("hidden");
    });
  });
}

// Handle the play button logic
function cardPlayBtn(songs) {
  const playIcons = Array.from(document.querySelectorAll(".cardSongPlaybtn"));

  playIcons.forEach((btn, index) => {
    const playSvg = btn.querySelector("img");
    btn.addEventListener("click", () => {
      const isPlaying = playSvg.getAttribute("src") === "/svg/cardPause.svg";

      playIcons.forEach((icon) => {
        const iconSvg = icon.querySelector("img");
        iconSvg.setAttribute("src", "/svg/cardPlay.svg");
      });

      if (!isPlaying) {
        playSvg.setAttribute("src", "/svg/cardPause.svg");
        currentSong.src = songs[index];
        currentSong.play();
      } else {
        playSvg.setAttribute("src", "/svg/cardPlay.svg");
        currentSong.pause();
      }
    });
  });
}

// Fill cards with song data
function cardFiller(songsNames, songsPaths, songsImages) {
  const songsCard = Array.from(document.querySelectorAll(".songCard"));

  songsCard.forEach((song, index) => {
    song.innerHTML = `
      <div class="flex items-center gap-[7px]">
        <div><img class="max-w-[40px]" src="${songsImages[index]}" alt="Song Image" /></div>
        <div>
          <a class="text-[10px] font-bold md:text-[13px]" href="${songsPaths[index]}">${songsNames[index]}</a>
          <div class="text-[8px] font-light md:text-[13px]">
            <span><a href="${songsPaths[index]}">Subodh Shah</a> - 300k views</span>
          </div>
        </div>
      </div>
      <div class="iconsContainer hidden w-[25%] justify-center md:justify-around">
        <button type="button" title="LikeBtn" class="rounded-xl p-[7px] hover:bg-[#393a32]">
          <img src="/svg/likeBtn.svg" alt="Like Button" />
        </button>
        <button type="button" title="DisLikeBtn" class="rounded-xl p-[7px] hover:bg-[#393a32]">
          <img src="/svg/dislikeBtn.svg" alt="Dislike Button" />
        </button>
        <button class="hidden rounded-xl p-[3px] hover:bg-[#393a32] lg:block" type="button" title="Options">
          <img src="/svg/threedots.svg" alt="Options" />
        </button>
      </div>
      <button type="button" title="Play Button" class="cardSongPlaybtn absolute left-[17px] hidden">
        <img src="/svg/cardPlay.svg" alt="Play button" />
      </button>
    `;

    const iconsContainer = song.querySelector(".iconsContainer");
    const playIcon = song.querySelector(".cardSongPlaybtn");

    song.addEventListener("mouseover", () => {
      iconsContainer.classList.remove("hidden");
      iconsContainer.classList.add("flex");
      playIcon.classList.remove("hidden");
    });

    song.addEventListener("mouseout", () => {
      iconsContainer.classList.add("hidden");
      iconsContainer.classList.remove("flex");
      playIcon.classList.add("hidden");
    });
  });
}

// Main function to load the app
async function main() {
  const songsUrl = `/songs.json`;
  const imagesUrl = `/images.json`;

  const [songsList, imagesList] = await Promise.all([
    fetchData(songsUrl),
    fetchData(imagesUrl),
  ]);

  if (songsList && imagesList) {
    const songsArray = songsList["list"];
    const imagesArray = imagesList["list"];

    const songsNames = songsArray.map((item) => item["name"]);
    const songsPaths = songsArray.map((item) => item["path"]);
    const songsImages = imagesArray.map((item) => item["path"]);

    sideMenuToggle();
    playButtonToggle();
    cardFiller(songsNames, songsPaths, songsImages);
    cardPlayBtn(songsPaths);
  }
}

main();
