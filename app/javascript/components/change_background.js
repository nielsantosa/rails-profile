const initChangeBackground = () => {
  const banner = document.querySelector(".banner");

  const changeBackground = (e) => {
    if (banner.style.backgroundColor !== "black") {
      banner.style.background = "black";
      document.querySelector("body").style.color = "white";
      document.querySelectorAll(".social-media a").forEach((aElement)=>{
        aElement.style.color = "white";
      });
    } else {
      banner.style.background = "lightgray";
      document.querySelector("body").style.color = "black";
      document.querySelectorAll(".social-media a").forEach((aElement)=>{
        aElement.style.color = "black";
      });
    }
  };

  document.querySelector(".touch").addEventListener('click', (e) => {
    changeBackground(e);
  });
};

export { initChangeBackground };
