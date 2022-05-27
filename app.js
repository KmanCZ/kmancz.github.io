const navLinks = document.querySelectorAll(".nav-link");

for (let link of navLinks) {
  link.onclick = (e) => {
    //Change underline link
    document
      .querySelector(".nav-link-active")
      .classList.remove("nav-link-active");
    e.target.classList.add("nav-link-active");

    //Change content
    const contentId = e.target.id.replace("link", "content");
    const targetElemet = document.querySelector(`#${contentId}`);
    const activeElement = document.querySelector(".active-section");

    activeElement.style.display = "none";
    activeElement.classList.remove("active-section");

    targetElemet.style.display = "block";
    targetElemet.classList.add("active-section");
  };
}
