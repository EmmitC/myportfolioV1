 // --- Mouse-follow distortion for Hero text ---
    const heroText = document.getElementById("heroText");
    document.addEventListener("mousemove", (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      heroText.style.transform = `rotate(${x}deg) skew(${y}deg)`;
    });

    // --- Random shaking of portfolio items ---
    const works = document.querySelectorAll(".work");
    setInterval(() => {
      const randomWork = works[Math.floor(Math.random() * works.length)];
      randomWork.style.transform += " translateX(5px) rotate(3deg)";
      setTimeout(() => {
        randomWork.style.transform = randomWork.style.transform.replace(" translateX(5px) rotate(3deg)", "");
      }, 200);
    }, 1500);


     // --- Chaotic Cursor Trails ---
    const colors = ["cyan", "magenta", "yellow", "lime", "red", "blue"];
    document.addEventListener("mousemove", (e) => {
      const dot = document.createElement("div");
      dot.classList.add("cursor-dot");
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      dot.style.background = colors[Math.floor(Math.random() * colors.length)];
      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 500);
    });


    const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactForm.style.transform = "rotate(2deg) translateX(10px)";
  setTimeout(() => {
    contactForm.style.transform = "rotate(-2deg) translateX(-10px)";
  }, 150);
  setTimeout(() => {
    contactForm.style.transform = "rotate(0deg) translateX(0)";
    alert("Your chaotic message has been sent!");
  }, 400);
});

