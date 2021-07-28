// widget1.getPosition(console.log);
var iframeElement = document.querySelector("iframe");
var widget1 = SC.Widget(iframeElement);

const pageLinks = ["firstPage", "secondPage", "thirdPage"];
let trackList = [...document.querySelectorAll(".tracklist li")];
console.log(trackList);
trackList.forEach((track, index) => {
  track.addEventListener("click", () => myFullpage.moveTo(pageLinks[index], 0));
});

////////////////////////
function setNavPosition() {
  const sliderNav = document.querySelector("#fp-nav");
  const sliderNavList = document.querySelector("#fp-nav ul");
  const inerentStyles = {
    slideNav: sliderNav.style,
    sliderNavList: sliderNavList.style,
  };
  if (window.innerWidth < 650) {
    sliderNavList.style.display = "flex";

    sliderNav.style.position = "absolute";
    sliderNav.style.marginTop = "50px";
    sliderNav.style.top = "88%";
    sliderNav.style.left = "15px";
  } else {
    sliderNav.style = inerentStyles.slideNav;
    sliderNavList.style = inerentStyles.sliderNavList;
  }
}
window.addEventListener("resize", setNavPosition);

var myFullpage = new fullpage("#fullpage", {
  autoScrolling: true,
  // navigationTooltips: ["Quando eu era pequeno", "Saude", "Morrer tentando"],
  navigation: true,
  navigationPosition: "right",
  showActiveTooltip: false,
  slidesNavigation: false,
  anchors: pageLinks,
  // scrolling
  // continuousVertical: true,
  // dragAndMove: true,
  fadingEffect: true,

  //style
  sectionsColor: ["#fff", "#aaf", "#f4c409"],
  waterEffect: true,
  waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
  // //custom selectors
  // sectionSelector: ".sectionSelector",
  // slideSelector: ".slideSelector",
});
