function filterMenu(category) {
  const items = document.querySelectorAll(".food");

  items.forEach((item) => {
    if (category === "all" || item.getAttribute("data-category") === category) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}

