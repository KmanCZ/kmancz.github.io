const navLinks = document.querySelectorAll(".nav-link");

for (let link of navLinks) {
  link.onclick = (e) => {
    document
      .querySelector(".nav-link-active")
      .classList.remove("nav-link-active");
    e.target.classList.add("nav-link-active");
  };
}

console.log(navLinks);
