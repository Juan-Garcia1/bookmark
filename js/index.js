const tabLinks = document.querySelectorAll(".tab-nav__link");
const accordionItems = document.querySelectorAll(".accordion__item");

tabLinks.forEach(tabLink => {
  tabLink.addEventListener("click", function(e) {
    e.preventDefault();
    tabLinks.forEach((link, i) => {
      if (link !== this) {
        link.classList.remove("tab-nav__link--active");
        document.querySelector(`#tab-${i}`).classList.add("tab__item--hide");
      } else {
        this.classList.add("tab-nav__link--active");
        document.querySelector(`#tab-${i}`).classList.remove("tab__item--hide");
      }
    });
  });
});

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
