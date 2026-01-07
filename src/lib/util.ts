// /utils.js

/**
 * Smoothly scrolls to an element by id
 * @param {string} elementId - The id of the element to scroll to
 * @param {number} offset - Optional offset (e.g., for sticky headers)
 */
export function scrollToElement(elementId: string, offset = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset - 20;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
