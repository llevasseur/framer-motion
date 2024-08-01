// Debounce function for window.resize event listeners
export const debounce = (fn, ms) => {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn();
    }, ms);
  };
};
