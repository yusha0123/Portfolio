const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  distance: "70px",
  duration: 2000,
  // reset: true,
});

const animateCards = () => {
  sr.reveal(".card", {
    origin: "bottom",
    interval: 100,
  });
};
sr.reveal(
  `.section-title,.about__subtitle,.about__text,.hider,.home__data,.home__title`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(`.home__img,.home__social,.about__img,.my-form,.footer__icon`, {
  origin: "bottom",
  interval: 100,
});

window.oncontextmenu = function () {
  return false;
};
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  } else if (
    (event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
    (event.ctrlKey && event.shiftKey && event.keyCode == 74)
  ) {
    return false;
  }
});

const projectArray = [
  {
    title: "Battery % Checker",
    img_src: "assets/img/battery.png",
    link: "https://battery-check-by-yusha.netlify.app",
  },
  {
    title: "Cat / Dog Api",
    img_src: "assets/img/cat_dog.jpg",
    link: "https://catog-by-yusha.netlify.app",
  },
  {
    title: "Tic Tac Toe",
    img_src: "assets/img/tic-tac-toe.png",
    link: "https://tic-tac-toe-yusha.netlify.app/",
  },
  {
    title: "Weather App",
    img_src: "assets/img/Weather_iOS_15.webp",
    link: "https://weather-yusha.netlify.app",
  },
  {
    title: "Tesla Landing Page Clone",
    img_src: "assets/img/Tesla_logo.png",
    link: "https://tesla-landing-y.netlify.app",
  },
  {
    title: "Notes Taking App",
    img_src: "assets/img/note.png",
    link: "https://inotes-yusha.netlify.app",
  },
  {
    title: "Quiz App",
    img_src: "assets/img/Quiz.png",
    link: "https://quizy-yusha.vercel.app/",
  },
  {
    title: "Text Utilities",
    img_src: "assets/img/utility.png",
    link: "https://text-util-yusha.netlify.app",
  },
  {
    title: "Realtime Chat App",
    img_src: "assets/img/messenger.png",
    link: "https://chat-yusha.netlify.app",
  },
  {
    title: "Alpha Stock",
    img_src: "assets/img/stock.png",
    link: "https://alpha-stock-yusha.netlify.app/",
  },
  {
    title: "Social Networking Website",
    img_src: "assets/img/social_media.jpg",
    link: "https://textbook-yusha.vercel.app/",
  },
  {
    title: "TinyLink(MERN)",
    img_src: "assets/img/tinylink.jpeg",
    link: "https://tiny-link-yusha.vercel.app/",
  },
  {
    title: "Expense Tracker",
    img_src: "assets/img/expense-tracker.jpg",
    link: "https://expensify-yusha.netlify.app/",
  },
  {
    title: "Discord Clone",
    img_src: "assets/img/discord-clone.png",
    link: "https://github.com/yusha0123/Discord-Clone/",
  },
];

projectArray.map((project) => {
  const card = `<div class="card">
 <img class="card-img" src="${project.img_src}" alt="" />
 <div class="card-content">
   <h3 class="card-header">${project.title}</h3>
   <a href="${project.link}" class="link-btn" target="_blank">View <i class='bx bx-link-external'></i></a>
 </div>
</div>`;
  document
    .getElementById("card-container")
    .insertAdjacentHTML("beforeend", card);
});

animateCards();
