const focusLimiter = (node) => {
  const focusableElementsSelectors = [
    'a[href]',
    'button:not([disabled])',
    'area[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'iframe',
    'object',
    'embed',
    '*[tabindex]',
    '*[contenteditable]',
  ];

  const focusableElements = node.querySelectorAll(focusableElementsSelectors.join());
  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];
  const keyCodes = {
    TAB: 9,
  };

  const handleKeydown = (event) => {
    if (event.keyCode !== keyCodes.TAB) return false;

    if (event.target === last && !event.shiftKey) {
      first.focus();
      event.preventDefault();
    } else if (event.target === first && event.shiftKey) {
      last.focus();
      event.preventDefault();
    }

    return true;
  };

  const limit = () => {
    node.addEventListener('keydown', handleKeydown);
  };

  return {
    limit,
  };
};

export default focusLimiter;