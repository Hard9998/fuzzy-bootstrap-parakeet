document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 0);

    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = window.innerHeight;
    let documentHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    let scrolledPercentage =
      (scrollTop / (documentHeight - windowHeight)) * 100;
    if (scrolledPercentage >= 100) {
      document.getElementById("main").style.width = scrolledPercentage + "%";
    } else {
      document.getElementById("main").style.width = scrolledPercentage + "%";
    }
  });
});
