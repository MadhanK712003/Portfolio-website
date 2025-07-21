function showMessage() {
  const msg = document.getElementById("message");
  msg.classList.remove("d-none");
  setTimeout(() => {
    msg.classList.add("d-none");
  }, 3000);
  return false;
}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  
  navLinks.forEach(link =>{
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



