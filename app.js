// const panels = document
//   .querySelectorAll(".accordion-panel")
//   .forEach((panel) => {
//     panel.addEventListener("click", (event) => {
//       panel.classList.toggle("open");
//     });
//   });

const panels = document.querySelectorAll(".accordion-panel");
panels.forEach((panel) =>
  panel.addEventListener("click", () => {
    if (panel.classList.contains("open")) {
      panel.classList.remove("open");
    } else {
      panels.forEach((otherPanels) => otherPanels.classList.remove("open"));
      panel.classList.add("open");
    }
  })
);

// TODOS
// 1. Mobile responsive
// 2. SVG box not orange on left side and SVG overflow on body
