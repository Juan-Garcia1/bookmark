const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach(accordionItem => {
  accordionItem.addEventListener("click", toogleAccordion);
});

function toogleAccordion() {
  currentActive = this;
  accordionItems.forEach(item => {
    const accordionHeaders = item.querySelector(".accordion__header");
    const accordionContents = item.querySelector(".accordion__body");
    // if not active close all accordions
    if (item !== currentActive) {
      accordionHeaders.classList.remove("accordion__header--active");
      accordionContents.classList.add("accordion__body--hide");
    } else {
      this.querySelector(".accordion__body").classList.toggle(
        "accordion__body--hide"
      );
      this.querySelector(".accordion__header").classList.toggle(
        "accordion__header--active"
      );
    }
  });
}
