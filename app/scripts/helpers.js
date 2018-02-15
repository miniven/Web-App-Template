const setImageSrc = (node, source) => {
  const imageNode = node;
  imageNode.src = source;

  return source;
};

export { setImageSrc };