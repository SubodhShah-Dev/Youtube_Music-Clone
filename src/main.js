const currentSong = new Audio();

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
        <button
                      type="button"
                      title="LikeBtn"
                      class="rounded-xl p-[7px] transition-all hover:bg-[#393a32]"
                    >
                    <svg fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color="#fff" class="likeBtn w-[15px] md:w-[20px]">
                      <path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                    </button>
                    <button
                      type="button"
                      title="DisLikeBtn"
                      class="rounded-xl p-[7px] transition-all hover:bg-[#393a32]"
                    >
                    <svg fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color="#fff" class="dislikeBtn w-[15px] md:w-[20px]" >
                      <path d="M2 11.5C2 12.6046 2.89543 13.5 4 13.5C5.65685 13.5 7 12.1569 7 10.5V6.5C7 4.84315 5.65685 3.5 4 3.5C2.89543 3.5 2 4.39543 2 5.5V11.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15.4787 16.1937L15.2124 15.3337C14.9942 14.6289 14.8851 14.2765 14.969 13.9982C15.0369 13.7731 15.1859 13.579 15.389 13.4513C15.64 13.2935 16.0197 13.2935 16.7791 13.2935H17.1831C19.7532 13.2935 21.0382 13.2935 21.6452 12.5327C21.7145 12.4458 21.7762 12.3533 21.8296 12.2563C22.2965 11.4079 21.7657 10.2649 20.704 7.9789C19.7297 5.88111 19.2425 4.83222 18.338 4.21485C18.2505 4.15508 18.1605 4.0987 18.0683 4.04586C17.116 3.5 15.9362 3.5 13.5764 3.5H13.0646C10.2057 3.5 8.77628 3.5 7.88814 4.36053C7 5.22106 7 6.60607 7 9.37607V10.3497C7 11.8054 7 12.5332 7.25834 13.1994C7.51668 13.8656 8.01135 14.4134 9.00069 15.5089L13.0921 20.0394C13.1947 20.1531 13.246 20.2099 13.2913 20.2493C13.7135 20.6167 14.3652 20.5754 14.7344 20.1577C14.774 20.1129 14.8172 20.0501 14.9036 19.9245C15.0388 19.728 15.1064 19.6297 15.1654 19.5323C15.6928 18.6609 15.8524 17.6256 15.6108 16.6429C15.5838 16.5331 15.5488 16.4199 15.4787 16.1937Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
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
    const likeBtn = song.querySelector(".likeBtn");
    const dislikeBtn = song.querySelector(".dislikeBtn");

    likeBtn.parentElement.addEventListener("click", () => {
      if (likeBtn.getAttribute("fill") === "black") {
        likeBtn.setAttribute("fill", "white");
        dislikeBtn.setAttribute("fill", "black");
        Array.from(likeBtn.children)[1].setAttribute("stroke", "black");
        Array.from(dislikeBtn.children)[1].setAttribute("stroke", "white");
      } else {
        likeBtn.setAttribute("fill", "black");
        likeBtn.setAttribute("stroke", "white");
        Array.from(likeBtn.children)[1].setAttribute("stroke", "white");
      }
    });

    dislikeBtn.parentElement.addEventListener("click", () => {
      if (dislikeBtn.getAttribute("fill") === "black") {
        dislikeBtn.setAttribute("fill", "white");
        likeBtn.setAttribute("fill", "black");
        Array.from(dislikeBtn.children)[1].setAttribute("stroke", "black");
        Array.from(likeBtn.children)[1].setAttribute("stroke", "white");
      } else {
        dislikeBtn.setAttribute("fill", "black");
        dislikeBtn.setAttribute("stroke", "white");
        Array.from(dislikeBtn.children)[1].setAttribute("stroke", "white");
      }
    });

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
