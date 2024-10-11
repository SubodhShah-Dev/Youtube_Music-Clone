const currentSong = new Audio();

function sideMenuToggle() {
  const hamBar = document.querySelector("#hamburgerIcon");
  const sideMenu = document.querySelector("#sideMenu");
  const crossIcon = document.querySelector(".crossIcon");

  hamBar.addEventListener("click", () => {
    sideMenu.classList.toggle("left-[-1000px]");
  });

  crossIcon.addEventListener("click", () => {
    sideMenu.classList.add("left-[-1000px]");
  });
}

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

async function fetchSongs(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`There was a problem with the fetch operation:`, error);
  }
}

async function fetchImages(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`There was a problem with the fetch operation:`, error);
  }
}

function cardPlayBtn(songs) {
  const playIcon = Array.from(document.querySelectorAll(".cardSongPlaybtn"));

  playIcon.forEach((btn, index) => {
    const playSvg = Array.from(btn.children)[0];
    btn.addEventListener("click", () => {
      if (playSvg.getAttribute("src") === "/svg/cardPlay.svg") {
        playIcon.forEach((icon) => {
          const pauseSvg = Array.from(icon.children);
          pauseSvg.forEach((e) => {
            e.setAttribute("src", "/svg/cardPlay.svg");
          });
        });
        playSvg.setAttribute("src", "/svg/cardPause.svg");
        currentSong.src = songs[index];
        currentSong.play();
        console.log(currentSong.src);
      } else if (playSvg.getAttribute("src") === "/svg/cardPause.svg") {
        playSvg.setAttribute("src", "/svg/cardPlay.svg");
        currentSong.pause();
      }
    });
  });
}

function cardFiller(songsNames, songsPaths, songsImages) {
  const songsCard = Array.from(document.querySelectorAll(".songCard"));
  songsCard.forEach((song, index) => {
    song.addEventListener(`mouseover`, () => {
      const iconsContainer = Array.from(
        document.querySelectorAll(".iconsContainer"),
      )[index];
      const playIcon = Array.from(
        document.querySelectorAll(".cardSongPlaybtn"),
      )[index];
      const playSvg = Array.from(playIcon.children)[0];
      if (iconsContainer.classList.contains("hidden")) {
        iconsContainer.classList.remove("hidden");
        iconsContainer.classList.add("flex");
      }
      if (playIcon.classList.contains("hidden")) {
        playIcon.classList.remove("hidden");
      }
    });
    song.addEventListener(`mouseout`, () => {
      const iconsContainer = Array.from(
        document.querySelectorAll(".iconsContainer"),
      )[index];
      const playIcon = Array.from(
        document.querySelectorAll(".cardSongPlaybtn"),
      )[index];
      const playSvg = Array.from(playIcon.children)[0];

      if (!iconsContainer.classList.contains("hidden")) {
        iconsContainer.classList.add("hidden");
        iconsContainer.classList.remove("flex");
      }
      if (!playIcon.classList.contains("hidden")) {
        playIcon.classList.add("hidden");
      }
    });
    const html = `<div class="flex items-center gap-[7px]">
                    <div>
                      <img
                        class="max-w-[40px]"
                        src="${songsImages[index]}"
                        alt="Song Image"
                      />
                    </div>
                    <div>
                      <a
                        class="text-[10px] font-bold md:text-[13px]"
                        href="${songsPaths[index]}"
                        >${songsNames[index]}</a
                      >
                      <div class="text-[8px] font-light md:text-[13px]">
                        <span
                          ><a href="${songsPaths[index]}">Subodh shah</a> - 300k
                          views</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="iconsContainer hidden w-[25%] justify-center md:justify-around">
                    <button
                      type="button"
                      title="LikeBtn"
                      class="rounded-xl p-[7px] hover:bg-[#393a32]"
                    >
                      <img src="/svg/likeBtn.svg" alt="Like Button" />
                    </button>
                    <button
                      type="button"
                      title="DisLikeBtn"
                      class="rounded-xl p-[7px] hover:bg-[#393a32]"
                    >
                      <img src="/svg/dislikeBtn.svg" alt="Dislike Button" />
                    </button>

                    <button
                      class="hidden rounded-xl p-[3px] hover:bg-[#393a32] lg:block"
                      type="button"
                      title="Options"
                    >
                      <img src="/svg/threedots.svg" alt="Options" />
                    </button>
                  </div>
                  <button
                    type="button"
                    title="Play Button"
                    class="cardSongPlaybtn absolute left-[17px] hidden"
                  >
                    <img src="/svg/cardPlay.svg" alt="Play button" />
                  </button>
                  `;
    song.innerHTML = html;
  });
}

async function main() {
  const songsUrl = `/songs.json`;
  const imagesUrl = `/images.json`;
  const songsList = await fetchSongs(songsUrl);
  const imagesList = await fetchSongs(imagesUrl);
  const songsNames = [];
  const songsPaths = [];
  const songsImages = [];
  const songsArray = songsList["list"];
  const imagesArray = imagesList["list"];

  songsArray.forEach((item) => {
    const songName = item["name"];
    songsNames.push(songName);
  });
  songsArray.forEach((item) => {
    const songPath = item["path"];
    songsPaths.push(songPath);
  });
  imagesArray.forEach((item) => {
    const songImg = item["path"];
    songsImages.push(songImg);
  });
  sideMenuToggle();
  playButtonToggle();
  cardFiller(songsNames, songsPaths, songsImages);
  cardPlayBtn(songsPaths);
}

main();
