const setImageSrc = (selector, source) => {
  const image = document.querySelector(selector);
  image.src = source;

  return source;
};

export { setImageSrc };