function toggleVisibility(e) {
  const target = e.target;

  if (target.classList.contains("js-toggle-button")) {
    const parent = target.parentElement;
    const content = parent.querySelector(".js-toggle-content");
    const isVisible = content.getAttribute("data-visible") === "true";
    const appendix = target.querySelector(".js-toggle-appendix");

    isVisible
      ? collapseSection(content, appendix)
      : expandSection(content, appendix);
  }
}

document
  .querySelector("#questions")
  .addEventListener("click", toggleVisibility);

function collapseSection(element, target) {
  const sectionHeight = element.scrollHeight;
  const elementTransition = element.style.transition;

  element.style.transition = "";
  requestAnimationFrame(() => {
    element.style.height = `${sectionHeight}px`;
    element.style.transition = elementTransition;
    requestAnimationFrame(() => (element.style.height = "0px"));
  });

  target.innerText = "+";
  element.setAttribute("data-visible", "false");
}

function expandSection(element, target) {
  const sectionHeight = element.scrollHeight;

  element.style.height = sectionHeight + "px";
  element.addEventListener("transitionend", (e) =>
    element.removeEventListener("transitionend", arguments.callee)
  );

  target.innerText = "-";
  element.setAttribute("data-visible", "true");
}
