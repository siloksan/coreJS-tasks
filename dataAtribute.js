function selectAndApply(callback, dataAttribute) {
  const elements = document.querySelectorAll(`[data-${dataAttribute}]`);
  if (elements.length > 0) {
    elements.forEach(element => {
      console.log(element);
      callback(element);
    });
  }
}

// Example usage
function highlightElement(element) {
  element.style.backgroundColor = 'yellow';
}

selectAndApply(highlightElement, 'color');