document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", function() {
      let item = this.parentElement;
      let content = this.nextElementSibling;
      
      let isActive = item.classList.contains("active");
      document.querySelectorAll(".accordion-item").forEach(i => {
        i.classList.remove("active");
        i.querySelector(".accordion-content").style.display = "none";
      });
      
      if (!isActive) {
        item.classList.add("active");
        content.style.display = "block";
      }
    });
  });